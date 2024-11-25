# pkosmowski.pl

# Prerequisites
- IDE
- Git
- Docker

# Development

## Code Checkout

```bash
git clone git@github.com:kospiotr/bcu.git
```

## Push code changes

```bash
git add .
git commit -m "Message"
git push
```

## Native

```bash
hugo server
```

## Docker-Compose
```bash
docker-compose up
```

## Docker

Install Docker: https://docs.docker.com/desktop/install/windows-install/

```bash
docker run -p 1313:1313 \
  -v ${PWD}:/src \
  hugomods/hugo:exts-0.128.2 \
  hugo server --bind 0.0.0.0
```

# Vendor assets

Downloads all vendor assets like Bootstrap into _vendor directory so that you can introspect API. Very useful for extending SCSS with bootstrap extensions.
```bash
hugo mod vendor
```