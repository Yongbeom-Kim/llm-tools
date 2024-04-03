locals {
  origin_id = local.s3_website_endpoint
}
resource "aws_cloudfront_distribution" "s3_distribution" {
  comment = "LLM Tools CloudFront Distribution"

  enabled             = true
  aliases             = [local.website_endpoint, "www.${local.website_endpoint}"]
  default_root_object = "index.html"

  origin {
    # domain_name = local.s3_website_endpoint
    domain_name = aws_s3_bucket.frontend_bucket.bucket_domain_name
    origin_id   = local.origin_id
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.origin_id

    cache_policy_id = aws_cloudfront_cache_policy.caching_optimized.id

    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.cert.arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }


}

resource "aws_cloudfront_cache_policy" "caching_optimized" {
  name        = "llm-tools-caching-optimized" # Extract to variable next time, maybe
  comment     = "Caching policy for LLM Tools. Policy with caching enabled. Supports Gzip and Brotli compression."
  min_ttl     = 1
  max_ttl     = 31536000
  default_ttl = 86400
  parameters_in_cache_key_and_forwarded_to_origin {
    cookies_config {
      cookie_behavior = "none"
    }
    headers_config {
      header_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "none"
    }
    enable_accept_encoding_brotli = true
    enable_accept_encoding_gzip   = true
  }
}