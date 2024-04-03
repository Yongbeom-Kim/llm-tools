import {
  to = aws_route53_zone.main
  id = var.aws_route53_zone_id
}

resource "aws_route53_zone" "main" {
  name = var.website_domain

  lifecycle {
    prevent_destroy = true
  }
}

# When using S3, there is an usse with trailing dot, and S3 endpoint fails with the trailing dot.
# CloudFront does not have this issue, so all is good.
resource "aws_route53_record" "record" {
  zone_id = aws_route53_zone.main.zone_id
  name    = var.subdomain_name
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = true
  }
}