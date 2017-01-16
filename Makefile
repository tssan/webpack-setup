APP_NAME?=myapp


.PHONY: build
build:
	@mkdir -p build
	@npm i
	@make webpack
	@cp -r src/$(APP_NAME)/index.html build/


.PHONY: rebuild
rebuild:
	@make clean
	@make build


.PHONY: webpack
webpack:
	@./node_modules/webpack/bin/webpack.js --display-error-details


.PHONY: dev-runserver
dev-runserver:
	@./node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --content-base build


.PHONY: clean
clean:
	@rm -rf node_modules/ build/
