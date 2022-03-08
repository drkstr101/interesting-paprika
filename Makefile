.PHONY: install clean build start lint test

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make

# Read only api token, OK to leak to public
DATOCMS_API_TOKEN :=fb5b9c5ed640be7bee0408c1d2e4f1

clean:
	rm -rf pnpm-lock.yaml node_modules/ **/__snapshots__/ **/.cache/
	npm cache clean --force

install:
	npm install -g npm
	npm install

build:
	node scripts/get-all-uploads.mjs | jq '.allUploads | map({ (.filename): . }) | add' > src/utils/media.json
	next build
	next export

start:
	next dev

lint: format
	stackbit validate
	eslint .

format:
	prettier --write .

docs:
	yarn depcruise --output-type dot --output-to docs/depgraph.dot --prefix "https://github.com/drkstr101/waweb/blob/main/"
	cat docs/depgraph.dot | dot -T svg > docs/depgraph.svg.tmp
	mv docs/depgraph.svg.tmp docs/depgraph.svg


