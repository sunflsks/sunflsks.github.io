.PHONY: run

all: launch
	bundle exec jekyll serve

launch:
	open "http://localhost:4000"
