.PHONY: build
build:
	@mkdir -p build
	@npm i
	@make webpack
	@cp -r src/index.html build/


.PHONY: webpack
webpack:
	@./node_modules/webpack/bin/webpack.js --display-error-details


.PHONY: dev-runserver
dev-runserver:
	@./node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --content-base dist


.PHONY: clean
clean:
	@rm -rf node_modules/ build/
