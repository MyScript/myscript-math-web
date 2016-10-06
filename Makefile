include Makefile.inc

ALL: clean prepare docker test

.PHONY: ALL \
	purge clean prepare \
	watch dev

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

doc:
	@rm -rf docs && mkdir -p docs
	@sh gp-custom.sh
