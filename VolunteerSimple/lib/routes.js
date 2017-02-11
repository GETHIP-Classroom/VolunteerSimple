import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "signup"});
  }
});

FlowRouter.route('/saved', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "saved"});
  }
});

FlowRouter.route('/profile', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "profile"});
  }
});

FlowRouter.route('/details', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "signup"});
  }
});

FlowRouter.route('/completed', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "signup"});
  }
});
