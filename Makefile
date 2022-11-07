.PHONY: down, clean, front, back

default:
	docker compose up -d
down:
	docker compose down
	docker system prune -a
	make clean
clean:
	cd go \
		&& rm -f -R go.mod go.sum
	cd react \
		&& rm -f -R node_modules package-lock.json

front:
	cd react && npm install && npm run start
back:
	cd go \
		&& rm -f -R go.mod go.sum \
		&& go mod init go \
		&& go get -u github.com/gin-gonic/gin \
		&& go get github.com/google/go-github/v48 \
		&& go get github.com/google/go-querystring \
		&& go get github.com/jinzhu/copier \
		&& go get github.com/gin-contrib/cors \
		&& go run main.go