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
	@polymer analyze myscript-math-exports.html myscript-math-web.html > analysis.json

dev:
	@polymer serve


docs:
	@rm -rf docs/components/* && mkdir -p docs/components
	@cd docs && bower install -q ../../myscript-math-web
	@cp -r bower_components/* docs/components/
