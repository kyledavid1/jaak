# jaak

##Team Members


[Angela Perez](https://github.com/anfperez)

[Andrew Holz](https://github.com/HolzAndrew)

[Jason Chan](https://github.com/Chimerus)

[Kyle Stengline](https://github.com/kyledavid1)


## Developing a basic Chatroom app using Action Cable and Rails 5!

<<<<<<< HEAD

Angela Part: 11 -16:30

10:30 Make sure that your room_channel.rb file looks like this before continuing:
![image_1](http://i.imgur.com/3vNPbXM.png?1)

Go to room.coffee. Under the received: (data) function, type the following:
![image_2](http://i.imgur.com/vIrSJvR.png?1)

Reload the Rails server. Open your Javascript console and type "App.room.speak("Hello World"). You should receive a Javascript alert saying "Hello World". This will tell you that your speak command is functioning properly.

Go into app > views > rooms > show.html.erb. Now we are going to add a form to the page so that we can get some input from the user.
![image_3](http://i.imgur.com/av8vHS0.png?1)

Go back to room.coffee and input the following code. This code will ensure that users can press Enter/Return to input their messages.
![image_4](http://i.imgur.com/MLsCcEA.png)

Go back to room_channel.rb and change the code so that speak now creates new messages.
![image_5](http://i.imgur.com/udaau0p.png)

Now we are going to create a function known as a job. Go to models > message.rb and enter in the following code.
![image_6](http://i.imgur.com/tC2M5e0.png)


=======
![Chatroom](https://media.giphy.com/media/xTiTnG4MC1jJ2vwzJu/giphy.gif)
>>>>>>> f797a3ed608750ab9bd0800fa987f81e60d1ef0d
