ALL: clean prepare docs

.PHONY: ALL \
	purge clean prepare \
	dev docs

purge:
	@rm -rf bower_components/
	@bower cache clean

clean:

prepare:
	@git fetch --tags
	@bower install $(BOWER_PARAMETERS)

dev:
	@polyserve


docs:
	@rm -rf docs/components/* && mkdir -p docs/components
	@cd docs && bower install -q ../../myscript-math-web
	@cp -r bower_components/* docs/components/
