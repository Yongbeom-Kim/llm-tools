# utl = ${subdomain_name}.${website_domain}
variable webite_domain {
    type        = string
    description = "The domain of the website hosted on the S3 bucket"
}

variable subdomain_name {
    type        = string
    description = "The subdomain name of the website hosted on the S3 bucket"
}

variable aws_access_key {
    type = string
    description = "AWS Access Key"
}

variable aws_secret_key {
    type = string
    description = "AWS Secret Key"
}

locals {
    # Bucket must have same name as domain
    frontend_bucket_name = join(".", [var.subdomain_name, var.webite_domain])

    # Tags for all resources
    resource_tags = {
        Name        = "LLM Tools Resources"
        Environment = "Production"
        Deployed_by = "Terraform"
    }

    website_domain = aws_s3_bucket_website_configuration.frontend_bucket_website_config.website_domain

    website_endpoint = aws_s3_bucket_website_configuration.frontend_bucket_website_config.website_endpoint
}