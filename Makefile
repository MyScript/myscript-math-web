include Makefile.inc

ALL: clean prepare docker test

.PHONY: ALL \
	purge clean prepare \
	watch dev

purge:
	@rm -rf bower_components/

clean:

prepare:
	@git fetch --tags
	@bower install

build:

test:

docker: build

watch:

dev:
	@polyserve
