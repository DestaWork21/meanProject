
const mongoose = require('mongoose');
const User = mongoose.model('User');

class UserController {

    createUser(request, response) {
       
        let user = new User(request.body);

        user.save((err) => {
            if (err) {
                response.json(err);
            } else {
                response.json(user);
            }
        })
    }

    findAll(request, response) {
        
        User.find({}, (err, users) => {
            if (err) {
                console.log("Users were not found due to error: " + err)
                response.json(err);
            } else {
                console.log("Users successfully found.")
                response.json(users);
            }
        })
    }

    findById(request, response) {
      
        User.findOne({ _id: request.params.id }, (err, user) => {
            if (err) {
                response.json(err);
            } else {
                response.json(user);
            }
        });
    }

    register(request, response) {
     
        User.findOne({ username: request.body.username }, (err, user) => {
            if (user) { 
                
                return response.json({ errors: "A user with this username already exists." });
            } else {
                let user = new User(request.body);
                
                user.save((err) => {
                    if (err) {
                        
                        return response.json({ errors: user.errors });
                    } else {
                        
                        request.session.user_id = user.id;
                        return response.json(user);
                    }
                })
            }
        });
    }

    login(request,response){
		User.findOne({username:request.body.username},(err,user)=>{
			if(!user){
				return response.json({errors:"No user with this username was found from find one."});
			}else{
				if(request.body.password == user.password){
					request.session.user_id = user._id;
					return response.json(user);
				}else{
					return response.json({errors:"Invalid Credentials."});
				}
			}
		});
	}

    logout(request, response) {
        request.session.user_id = null;
        return response.json(false);
    }

    session(request, response) {
    
        if (request.session.user_id != null) {
            User.findOne({ _id: request.session.user_id }, (err, user) => {
                if (err) {
                    return response.json({ errors: "Failed to validate session" });
                } else {
                    return response.json(user);
                }
            });
        } else { 
            console.log(request.body);
            return response.json({ errors: "Invalid Session" });
        }
    }
}

module.exports = new UserController();
