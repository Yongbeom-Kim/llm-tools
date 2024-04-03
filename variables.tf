# url = ${subdomain_name}.${website_domain}
variable "website_domain" {
  type        = string
  description = "The domain of the website hosted on the S3 bucket"
}

variable "subdomain_name" {
  type        = string
  description = "The subdomain name of the website hosted on the S3 bucket"
}

variable "aws_access_key" {
  type        = string
  description = "AWS Access Key"
}

variable "aws_secret_key" {
  type        = string
  description = "AWS Secret Key"
}

variable "aws_route53_zone_id" {
  type        = string
  description = "AWS Route53 Zone ID of the Route53 hosted zone to use for the DNS recods."
}

locals {
  # Bucket must have same name as domain
  frontend_bucket_name = join(".", [var.subdomain_name, var.website_domain])

  # Tags for all resources
  resource_tags = {
    Name        = "LLM Tools Resources"
    Environment = "Production"
    Deployed_by = "Terraform"
  }

  s3_website_endpoint         = aws_s3_bucket_website_configuration.frontend_bucket_website_config.website_endpoint
  cloudfront_website_endpoint = aws_cloudfront_distribution.s3_distribution.domain_name
  website_endpoint            = join(".", [var.subdomain_name, var.website_domain])
}