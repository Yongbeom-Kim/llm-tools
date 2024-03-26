variable "frontend_bucket_name" {
    type        = string
    description = "The name of the S3 bucket to store the frontend files"
}

resource "aws_s3_bucket" "frontend_bucket" {
    bucket = var.frontend_bucket_name

    tags   = {
        Name        = "LLM Tools Frontend Bucket"
        Environment = "Production"
        Deployed_by = "Terraform"
    }
}

resource "aws_s3_bucket_website_configuration" "frontend_bucket_website_config" {
    bucket = aws_s3_bucket.frontend_bucket.id

    index_document {
        suffix = "index.html"
    }
}

resource "aws_s3_bucket_public_access_block" "example" {
    bucket = aws_s3_bucket.frontend_bucket.id

    block_public_acls       = false
    block_public_policy     = false
    ignore_public_acls      = false
    restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "frontend_bucket_policy" {
    bucket = aws_s3_bucket.frontend_bucket.id

    policy = jsonencode({
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Principal": "*",
                "Action": [
                    "s3:GetObject"
                ],
                "Resource": [
                    "arn:aws:s3:::${var.frontend_bucket_name}/*"
                ]
            }
        ]
    })
}

module "dir" {
  source  = "hashicorp/dir/template"

  base_dir = "${path.module}/frontend/dist"
}

resource "aws_s3_object" "object" {
  bucket       = var.frontend_bucket_name
  for_each     = module.dir.files
  key          = each.key
  content_type = each.value.content_type

  # The template_files module guarantees that only one of these two attributes
  # will be set for each file, depending on whether it is an in-memory template
  # rendering result or a static file on disk.
  source  = each.value.source_path
  content = each.value.content

  # Unless the bucket has encryption enabled, the ETag of each object is an
  # MD5 hash of that object.
  etag = each.value.digests.md5
}