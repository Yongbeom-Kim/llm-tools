output "s3_bucket_address" {
  value = local.website_endpoint
}

output "website_address" {
  value = join(".", [var.subdomain_name, var.webite_domain])
}