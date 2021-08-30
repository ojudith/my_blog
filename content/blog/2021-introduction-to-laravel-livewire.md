---
title: Introduction to Laravel Livewire
read: 3 MIN READ
date: 2021-08-30T12:22:59.314Z
description: Basic concept on livewire
tag: '#laravel #php #livewire'
---
**Introduction**
This article introduces Livewire and how it can be implemented into a Laravel application.

A modern full-stack web app can be a bit complex to build especially with tools like Vue and React and this is the problem Livewire aims to solve.

Livewire is a full-stack framework for Laravel that enables a developer to build a dynamic interface that is less complex within the Laravel environment.

**Prerequisites** 
Basic knowledge of Laravel is needed

**Takeaways**
After going through this article, you will understand:
* What Livewire is?
* What problem does Livewire aim to solve, and 
* How to get started with Livewire

with that being said, the following steps will enable us to get started with Livewire and how we can implement it into our Laravel application.

**Steps**
a) Install a new Laravel project using 
`composer create-project laravel/laravel laravel-livewire`
b) cd into laravel-livewire
c) Run `composer require livewire/livewire`
d) Include `@livewireStyles` and `@livewireScripts` in the head and body tag of your `views/welcome.blade.php` file.
```php
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel | Livewire</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
        @livewireStyles
    </head>
    <body class="antialiased">
     

        @livewireScripts
    </body>
</html>
```
once that is done, we have all we need to start using Livewire in our Laravel application.

e) Next, run `php artisan serve`
f) Let make our first Livewire component for a simple counter to increase and decrease a value using the `php artisan make livewire counter` command.

if that is successful, you should see a screen like the one below in your terminal

![livewire](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zlqddghj4tlyodc4t4s0.PNG)

Looking into our project structure, the above command created two new files in `app/Http/Livewire/Counter.php` 

```php
<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Counter extends Component
{
    public function render()
    {
        return view('livewire.counter');
    }
}

```
and `resources\views/livewire/counter.blade.php`
```
<div>
    ....
</div>

```
g) Next, we want to render a simple text to our browser to ensure our component is working, modify your counter Livewire blade file

```php
<div>
    <h1>I am learning Livewire</h1>
</div>
```
h) Before that, we need to include `<livewire: counter /> 
` component in our welcome blade file 

```php
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel | Livewire</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
        @livewireStyles
    </head>
    <body class="antialiased">
     
        <livewire:counter /> 
        
        @livewireScripts
    </body>
</html>
```
we can now preview it on our browser 
![image2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lqhbgrg3jpki9djt5rgy.PNG)

Whola!, we have our component rendered to the browser successfully.
i) We can now implement our simple counter

```php
<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Counter extends Component
{
    public $count = 0;
 
    public function increase()
    {
        $this->count++;
    }
 
    public function decrease()
    {
        $this->count--;
    }
 
    public function render()
    {
        return view('livewire.counter');
    }
}
```
Here, we declared a public property `$count` initialized to zero, a method to increase and decrease the number. Public property in Livewire is automatically made available to the view.

```php
<div style="text-align: center">
  <h1>Counter using Laravel Livewire</h1>
  <button type="submit" wire:click="increase">+</button>
  <button type="submit" wire:click="decrease">-</button>
    <h2>{{$count}}</h2>
</div>
```
we used the livewire template directive in our buttons to increase and decrease the number.

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ztjduc3trk9any0rnyun.PNG)
we have successfully implemented a simple counter to increase and decrease numbers using Livewire. 

A lot can be still be gotten from Livewire to enable you to build that full-stack modern web application.

To read and get more on Livewire, visit [livewire documentation](https://laravel-livewire.com/docs/2.x/quickstart)

The code snippet for this tutorial can be found in my [GitHub repo](https://github.com/ojudith/laravel-livewire)

Feel free to say hi via [LinkedIn](https://www.linkedin.com/in/oikujudith/)


