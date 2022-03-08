.PHONY: install clean build start lint test

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make

clean:
	rm -rf pnpm-lock.yaml node_modules/ **/__snapshots__/ **/.cache/
	npm cache clean --force

install:
	npm install -g npm
	npm install

build:
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


