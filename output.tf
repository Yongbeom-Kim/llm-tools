output "s3_bucket_address" {
  value = local.s3_website_endpoint
}

output "website_address" {
  value = join(".", [var.subdomain_name, var.website_domain])
}