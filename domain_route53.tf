# This is imported. Should have used an import block, but oh well
resource "aws_route53_zone" "main" {
  name = var.webite_domain

  lifecycle {
    prevent_destroy = true
  }
}

# There is this stupid bug where a trailing dot is added to the alias name,
#   and it causes the lookup to fail because AWS S3 buckets just fail to handle these URLs?
# So we have to remove the trailing dot by hand in the web config.
resource "aws_route53_record" "record" {
  zone_id = aws_route53_zone.main.zone_id
  name    = var.subdomain_name
  type    = "A"
  alias {
    name                   = local.website_endpoint
    zone_id                = aws_s3_bucket.frontend_bucket.hosted_zone_id
    evaluate_target_health = true
  }
}