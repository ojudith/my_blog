---
title: Reset or Change Password in Laravel
read: 2 MIN READ
date: 2021-01-04T10:22:40.699Z
description: Reset or change password in Laravel
tag: '#laravel'
---
Reset or change password functionality is part of most web app authentication system that enables a user to change their forgotten password. 

Implementing this feature is part of the laravel core setup , all you need do is to configure Laravel authentication into your project. visit the [laravel documentation](https://laravel.com/docs/7.x/authentication) if you need a quick guide.

If the installation is successful, all the necessary files (views, controllers, migrations e.t.c) are automatically added to your project.

In this article, I am going to be showing you how to *activate the default laravel reset  password feature and how to avoid the error of email not being sent.*

## Prerequisite

I assume you already have your project set up as well as the laravel default authentication installed.

## Steps

The following are the required steps to enable your user  reset their  password and receive email to complete the process.

1. make sure you have your database set up and you have successfully migrated your tables.
2. verify that your `App\User` model implements  `use Illuminate\Contracts\Auth\CanResetPassword`
3. verify that your database contains the `password_resets_table`.

Run your localhost url and navigate to the login screen, on the login display form, click on change password, that should redirect you to a page for you to enter your email address (make sure, it is the same email you used while registering).

If that is successful, you will get an email redirecting you to the change password form, requesting you to enter your new password.

if, for whatever reason, you are not getting the email, add the following to your `.env` file

1. mail_from_address
2. mail_from_sender

To read more about resetting password in laravel , visit the [laravel reset password documentation](https://laravel.com/docs/7.x/passwords#resetting-database).

Original article posted on my [blog](judy)
