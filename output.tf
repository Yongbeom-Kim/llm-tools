output "website_address" {
    value = aws_s3_bucket_website_configuration.frontend_bucket_website_config.website_endpoint
}