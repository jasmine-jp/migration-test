package main

import (
	"github.com/gin-gonic/gin"
	"go/api"
)

func main() {
	user := new(api.User)

	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		user.GetGitApi(c)
		c.JSON(200, gin.H{
			"username": user.Name,
			"followers": user.Followers,
			"public repos": user.ReposNum,
		})
	})
	router.Run() // "localhost:8080"
}