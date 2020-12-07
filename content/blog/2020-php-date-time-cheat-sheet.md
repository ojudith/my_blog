---
title: PHP Date/Time Cheat Sheet
read: 2 MIN READ
date: 2020-12-07T11:00:53.931Z
description: The different ways we can format date/time in PHP.
tag: '#PHP'
---
PHP uses the standard UNIX timestamp, which is the number of seconds since the start of January 1, 1970.

Date/Time appear in different parts of our application, be it a blog application, membership or forum website and so on.

The table below shows the different ways we can format date/time in PHP.

| format | description                                  | value               |
| ------ | -------------------------------------------- | ------------------- |
| z      | day of the year                              | 01 to 365           |
| N      | day of the week from Monday to Sunday        | 1 to 7              |
| j      | day of the month with no leading zero        | 1 to 31             |
| S      | Suffix for the day of the month              | st, nd, rd or th    |
| d      | two digit day of the month with leading zero | 01 to 31            |
| D      | three letters day of the week                | Mon to Sun          |
| l      | full names of the day of the week            | Sunday to Saturday  |
| W      | number of the week of the year               | 01 to 52            |
| y      | year in two digit                            | 00 to 99            |
| Y      | year in four digit                           | 0000 to 9999        |
| t      | number of days in a specific month           | 28 to 31            |
| F      | full name of the month                       | January to December |
| m      | number of the month with leading zero        | 01 to 12            |
| M      | names of the month in three letters          | Jan to Dec          |
| n      | number of the month with no leading zero     | 1 to 12             |
| w      | day of the week from Sunday to Saturday      | 0 to 6              |
| i      | minutes with leading zero                    | 00 to 59            |
| s      | Seconds                                      | 00 t0 59            |
| A      | uppercase                                    | AM to PM            |
| a      | lowercase                                    | am to pm            |
| g      | 12-hour format with no leading zero          | 1 to 12             |
| G      | 24-hour format with no leading zero          | 0 to 23             |
| h      | 12-hour format with leading zero             | 01 to 12            |
| H      | 24-hour format with leading zero             | 00 to 23            |

For further reading check out [the PHP date/time documentation](https://www.php.net/manual/en/function.date.php)
