.PHONY: install clean build start lint test

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make

clean:
	rm -rf pnpm-lock.yaml node_modules/ **/__snapshots__/ **/.cache/
	npm cache clean --force

install:
	npm install

build:
	@echo "~~~> Building [interesting-paprika]..."
	next build
	next export

start:
	@echo "~~~> Launching [interesting-paprika]..."
	next dev

lint:
	@echo "~~~> Checking [interesting-paprika]..."
	prettier --write .
	stackbit validate
	next lint

docs:
	yarn depcruise --output-type dot --output-to docs/depgraph.dot --prefix "https://github.com/drkstr101/waweb/blob/main/"
	cat docs/depgraph.dot | dot -T svg > docs/depgraph.svg.tmp
	mv docs/depgraph.svg.tmp docs/depgraph.svg


