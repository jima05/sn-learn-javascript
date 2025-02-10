gs.info("Current User Name: "+ gs.getUserName());

var user = gs.getUser();

gs.info("Current User Id: "+ user.getID());
gs.info("Current User Roles : \n "+ user.getRoles());

gs.info(" \n Current Instance : "+ gs.getProperty('instance_name'));
gs.info("  Current url : "+ gs.getProperty('glide.servlet.uri'));

