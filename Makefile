include Makefile.inc

ALL: purge clean prepare

.PHONY: ALL \
	purge clean prepare \
	watch dev \
	escrow

purge:
	@rm -rf bower_components/

clean:

prepare:
	@git remote add github $(GITHUB) > /dev/null; true
	@git fetch --tags
	@bower install && bower link

watch:

dev:
	@polyserve

escrow:
	@rm -rf escrow/ && mkdir -p escrow/
	@$(MAKE) _backup-src

_backup-src:
	@echo "Archiving sources"
	@git archive --format=tar HEAD | gzip > escrow/myscript-math-web-src-$(GIT_VERSION).tar.gz
