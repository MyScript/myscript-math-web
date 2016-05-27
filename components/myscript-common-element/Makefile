include Makefile.inc

ALL: purge clean prepare docker test

.PHONY: ALL \
	purge clean prepare \
	watch dev \
	escrow

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

escrow:
	@rm -rf escrow/ && mkdir -p escrow/
	@$(MAKE) _backup-src

_backup-src:
	@echo "Archiving sources"
	@git archive --format=tar HEAD | gzip > escrow/myscript-common-element-src-$(GIT_VERSION).tar.gz
