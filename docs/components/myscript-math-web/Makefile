include Makefile.inc

ALL: clean prepare docker test

.PHONY: ALL \
	purge clean prepare \
	watch dev docs

purge:
	@rm -rf bower_components/
	@bower cache clean

clean:

prepare:
	@git fetch --tags
	@bower install $(BOWER_PARAMETERS)

build:

test:

docker: build

watch:

dev:
	@polyserve

docs:
	@rm -rf docs/components/* && mkdir -p docs/components
	@cd docs && bower install -q ../../myscript-math-web
	@cp -r bower_components/* docs/components/
