package main

import (
	"github.com/gin-gonic/gin"
	"go/api"
)

func main() {
	username := "chihiro-yabuta"
	followers, repos := api.Get(username)

	web := gin.Default()
	web.GET("", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"username": username,
		    "followers": followers,
		    "public repos": repos,
		})
	})
	web.Run() // "localhost:8080"
}