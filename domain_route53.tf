resource "aws_route53_zone" "main" {
    name = var.webite_domain
}

resource "aws_route53_record" "record" {
    zone_id = aws_route53_zone.main.zone_id
    name = var.subdomain_name
    type = "A"
    alias {
        name = local.website_endpoint
        zone_id = aws_s3_bucket.frontend_bucket.hosted_zone_id
        evaluate_target_health = true
    }
}