.PHONY: down, front, back

default:
	docker compose up -d
down:
	docker compose down
	docker system prune -a

front:
	cd react && npm install && npm run start
back:
	cd go \
		&& rm -f -R go.mod go.sum \
		&& go mod init go \
		&& go get -u github.com/gin-gonic/gin \
		&& go get github.com/google/go-github/v48
	cd go/api \
		&& go get
	cd go \
		&& go run main.go