var isPlayValid = false;
var hasWon = false;
var stopcount = false;
var numberDraw = 0;
var numberWon = 0;
var numberLost = 0;
var roundNumber = 1;

var sq1 = document.getElementById('square1');
var sq2 = document.getElementById('square2');
var sq3 = document.getElementById('square3');
var sq4 = document.getElementById('square4');
var sq5 = document.getElementById('square5');
var sq6 = document.getElementById('square6');
var sq7 = document.getElementById('square7');
var sq8 = document.getElementById('square8');
var sq9 = document.getElementById('square9');

var currentPlayer = "X";
var autoPlay = true;
var started = false;

//Created by Jason Bevans June 25th, 2017

    function circle() {

        var rot =  Math.floor((Math.random() * 360));

        var imagedata = 'data:image/png;base64,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';


        return '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="pattern" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g transform = "rotate('+rot.toString()+',40,40)"> <circle cx="40" cy="40" r="30" fill="transparent" stroke="#FFF9C5" stroke-width="0" /> <circle class="circle" cx="40" cy="40" r="30" fill="transparent" stroke="#FFF9C5" stroke-width="4" /></g> </svg>';
    }

function drawX() {

    var rot =  Math.floor((Math.random() * 90));

    var imagedata = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAEtNJREFUeNpcmWmMZFd1x+sttVdX9Va97/vCzHgZxjCDbWSzyRApQhA+gYgUCTDwgSiKFCV8I5GiCEX5kMiEKImAsZAwCIyEwR6EMRM8no2Z9iw9ve/dVV1dXfv+3svv3GukKK3WTC333XvO//zP/5xz21hrrDQbTZ/8eJZte55n2/bpyWlbvC2TzvQO9hZOC9VKtS3RFggG/H67UW/WqrV4e9xxHMuy+MqyzJN0dmdzZ2h0iAdTB+me/uTCuXnTspbfXa5Val09XYMjA/V6g8dbLaeYL7Z3tueyuVKxtHp/dWphuqOrvVwssydH12o1P+v4jzeBQMAwfK7r1Wt1LItEIz7D193T7TpuoiMeb28zDKPZbOFAsVCMtUUt2/LUjz/gr1frncnOQChgGsbrP3vjBy9d/uRnX5ianzKMFjbd/P2tuTOzAyMDrGRBKOLHPdM0eTbWFvvQRz/ktFonx1lc5fNQOIQB7R0JG49t22q1WuViqa09Ho6GG7WGaRo2njVbhdM8XuZP870DvawBQvYCoVq1jq0YWi1XOa9Rb+Abps+fnfvhb15ee7DGMZwxMjkS70jUqiBqsabpOPmjfKIjgVkcH4vHCrkCcQhHwvdu3Zs/N18qlDioVqvbnsuPx2Px9gQeACYQGqaJo5wXbYv99V98jR0XH188c/7Mhz/xbDAUNC3z9tu3F84tBMNB/ZY4QoJiocRJADx3dg5E7995QOzCkVCytwsjOIa4xxNxvOUgQpbNZDu6Ojgaa5rNJs4TbvbBaGOltswrjQ27NxpN/AYDwzR46ziuKT/G0X4KL1mJc3wbDAUsv01Q4Aogtdi12WrU6oRjfGZ8c2VzeHwYOwAjEotgE6zAJn1ELpvHFOWAw3oQ3V7bZuXVK1efeuap/uH+vsFeY7X+CNvZmiA2lR8czFtesAuA8cML2bMhb/m82Whgbleyk099vG22cBeLOTgSiYQioUq5EgoFCYJOIJ4VouBky83n8oe7hxMz4+Fo5PjoGOLfuHoTtzu7O3EbegAQTBXweUN2+AOB9s4EX2NTtVxp1gVVHAKH7fXtcqkCQgBwtH9UrzUSnQk45xN/zNPMKbuzCfuSXI1GQyWQqThH7JxKucopMMHzXGAbnRrN5wqkGgHBn5GJ4dn3zcJ3fufOzLGgs6uTOBi8AiG8yWfzPAzCkIVnYDdLnZYzNj2G93gMk3r6e0zxW2J3sHN4uHfIIzsbO9/99n+89au3YEyr0Tw5PkFuAA/W4220LQoPAsEgEcdun+eLxiKcAtPbu9oBFRZe++07xHpve/9f/+Hfcqc54w/Ht0LhIGAAPrsYPp+wpN6AKNF4LBDwE6/UQYoEwQ5sxW/ROZUcfNWWIDFrd67f6Up2YT12A5XWDlaSvATRVeHMHmdLxTJUARtYgT9ka7lUXnu4joJgUK1SHZ+ZiMWj+Gz7g36wicaiBNXwcbIPMvGFKJNs50NX4CAvhXDqXxzFsmA4xItMKsPZHHnp+UuK+7DTxXxRZ08SHBqwP2uQULD0qTMgOHEgGwBMZ9LI+DC4FPMlHkEETFSqmCtAIOyQgwWMBmhBCEtSssKHoEJgORKjOQyGAjC8hlLvvPUOMfrghz+IqEr0TROwMalUKAIGcYRGvIXxnI1Y8CNCGo9iDXgTH9Lw4dKyMDIYBHsAIrKmrVSKxwzlH4HPZk7fvX2PBN7d3K0inJUa2PArwtNyKS8aOZiH9S985oVwOGwH7O2NbW0HTGeBIIQbPp8SiAYkqddkK1Xl0CPJaGgKKTdWNrt7uogDRpcKZZ28GGTzXmEuVIB3MHp8eox15AG2K1/tilJzTk20x0EFs3CUfUX9bDOkAoo8YqiDlrfekxIUhIxGCNghkz5RmHkAwVOghauTc5MXnn7/yv1VYgr2SMHW2pYwkoiUS1W2w0VHZcru5t7i4wtoPSJuGmb6MG3ZJQgHW/GSHS2/Z5iW4Tmu5waDQWylnIMl1FHFzvWp+kqVJLK6WCEx5DuZCB8wC+kBS2jAU1Dq+U89BxyIRf9sP1igxiZb8PWP/vsVRzT3hGIOVLxmEbTjBeLGM3hAASDR8JizMY7Q+1XHQbU52DkYGB4Q5Ww56FmlxHme3/ZDNiD83RtXf/HKa1gA4bRK44CWfkBF9O/eWMJ5Kg/8gSScaH3tb78KmIn2BO8hB0IQiYQLOdTVj5dghhwTINDS5ZZTpb9A01tiOpkYS8QQOp5FPjiScEAATCL5f3r51ZnFqZGJEYxAQchQEovjcAxZ5pGjvSNM7B/qA0jOclQ3gMTYItDlKp8+9ewFXMlncyKVpgGr4ATGYRavyRRcFy6bhtYkyaxoGMtA6zh1vLOxu7+9/7E//SgxQu140FeuLjy2AM05Ynh8iPzCN8oJqJD4Q2NDGAfD9rb2MBQgyShAEU2Qyu95qMjjH3gMFlOtbly95Sq9Ud6bAINblXK5Xq1hE6GkTSjmirpoAh78g0h9g31PPfP+T3z643AIYPzBQCZ1gnBMzU2I7qv+Z2d9hzgm+5OQGjJQUTDx9rU/UKEL+SJsAcvXfvxLeZzIfPHrX6SM06YBL5+ePX8GGCAySIj68TocBL9EJ1XCRf1IeBQR/4Aa69lad0QICm6MT4+HhQMFukXIgDzyOZBI9TVFjICW7lKplJ9NpuYnQeje7fu8wA0WY4m0mS/+zVe6ujsO945ABfswC1eQDFt+RAikxLqih4bUT1+1VIVzJ+mTe7fvpQ+PkZyoalbhLBpL/6PiHsZoVEP1I1KdkEAowVac8qVPf+X8pSfJrT+qfwJzy+XK9bdusA/aLs0VpvEYXQ6nEkQ8YJ1us3hGtfhSBHVi09ukDlPoMkpDW3z2/FlEUtoYiqlhEDvWqHAYYCbJGAjQx4Io7R7Ys3Juau7yle+TzMFQqFISlecgQEodpjmOBp1A0cWYsJf2F4QoCxefuyhVzHWxg8SHExK4aBgacgwyqxpRCyKjzlBVwEO4lUb09PVIl2FZ9DlSmDNZ/IzEwvAdroANeTM6OWop9Yeg7HycytAEcBZ8Ij4f+ZPnydmJ2Ynldx8Zy5UHlMb00TGW4hPRUTZ5wxPDOIftiBDW0IqgcLp3IBY4h09sTZEmy/CY1xy5u7VHriT7kmqMkW7YFmWRFMYalJM1bLu8tAxCD+4+nJqbJOhIKI5JAT3Na1yFQLwv5gs4xHmwFbf01ECx4yvQ0oVWMwx4QpEw6gKlOCnZ1425okZVOueWHh/02EL4+I+WAfXBFPBmTyBkc2Cj+i4+tsA+d27cpRNkmCOIMWmlAhgnmyAzk7MT7IgSDo4OYsf6o3W+IPbkoOqYXd0Te8KzhlS0TpFfOCQdkW1jEEZJ/1Qs9w31JWTaqQv3I6FwOAQSYBBUzHNbLgwmDZEMBAyxkOQIhaTMtxzsxn0MkBJG59Te1aHbVuzt6O6ggmITgxGJQ945qvKocu4yC0nFk16+i6CADPaxHZDw+P7O/uWXXoZYqsOV1MU+jlQ4SWtEr8w+ap6Lw86lm++yCfWATXicWJHLVA7pagK27fs/P+AEtv6ArXME3TetNolQq0VYkRzXNaTCqJJApnAYYibNo+Og3agi5dkn3R755DEBHOwWbv3+Fi08iaVljO+g7MBwP4BRecCbzLAUnfhW2MymPs/3/344m3jRiuAvz3hSc6gHPhIQ+QFt6SPgE95Xa8L0jd1CvuDIfORgB2ss1cOYcnwVYJjoCTdjIw6THMgYPMmfFgj6zf+59carV7p7uyW4AQk0v9IAUox0A4jAYDVHkkGgiuGwChcPdg8oJuDRFo9hn5pnZAYEFVryv3vxm5JxNpNmU+4mWpIlmEva87h0haKCIsu7W/uwAq3qHeyFxLyYmB3nOKZijiOpKQZAhXEmYQZwMcvwYQEdN9vR31lyvLAbkUQCqGUMJEu37imcbAgnSmYa2Pf0x57WKUwri1eECZVRTUtAQt8UuYGIlGpyS1qaao2GReNKrNBzuEVntvjEIkezP29lmF7bXu8b6KX2CXKOQxnha0JjqY4Uz4gFwoSt1C9cL+TyHMeamuqnn/34MypkPj1y8hwwQERdBIEN61kAHfUagLh7c4loAhgKJ52tbWEcxbup0hmTIHV0YKQfgsvct3tIQuEKsMHQeEccSmIHH8rA7/NRc2hfYzJUWtAc5GmYHt1boQ3kVBKQB+ktcZfdsbhRJ38NpA52kl8IAeNX9iS7vbajfWB/WAX3mdX0pMRBKKJ4Q/dbKJYZ3jEc3SMctJrZ9AmZUDNruuJaagaBW1jD3A5UyERcbngitEqgQuCIC7xmWoQfEqNgIK/4BzFIMYxg0keoLj138VOf+2RTLjusmpooaTSkmbEtBgXqklw54QqOUsiYTzSpaTxQF/wWgQ2I7vEkJ4GZtLOmhbl0fOQpcpxJHYsaVWrJ3m4cpUXhvJHJEbBPHaThnyNzognGuAepmQf1DIz/QgM1LOEqdZmEgyss40Rb9XEGIWNYVSUzvLm6ObM4I+MhKlpvqkJmKnoZrZZ3ks4wAeMQMPCLcxhEfhVU2wm1KSajkyMEYu3hGp+APXlqqJpBGSY5Nh5t0FTpK0ggZAHllbLIYqzUg7RJNeAL1dK03v7N2666vaDCCP09D5uIDvs6rru9vkOHeZrNgSIOSASlLbNkF5W2BK5alfafSYFpgMqhP+dIlvEU6AI8razMqHJPmR8cGZw/O09bRYq8/tPXMYBCQvSMh+X72nBJH3X/5KnxgbdoHQoEr6nidIh6LsDEhXMLCIG+OltfXp89M4spkAFbMULI3myuPljLneSYtKjlRJOgz7xvhj05ixilj9JUa/bEMWmK+pPAL4OkZa0tbyBmchvI0rBUN9NvSKMn9Ucu3Byd9jJCqfREovAy2ZvUd0ZqSpYBE6RV6xwnUuxGpaNhAnLiCB8Y8uik//Nf/gubphamoBG/aBiJElIyibD51PUdOXd8lOFEuVxVF1dBYFd9i03UOA9OAhtfq4s/mq4ADKVl49+ttW25yHNdindPX3J6cZrSjrZhIrmJsA2PD0vD5Lf5lzaLzCd2X/jq5/U0G1T1+AcvXeYrdASvGAXkjs5x4XHfYC+jigz7cvXgugRFqp5hqKalnZ6CBoDtdNYQXDoZGMD0TB4g06A7NDrok7RACIJ6Jj5JZ99+89rK/RXw4C19ZeE0v7e5SxoxK8BrCAQejB5/9uefZYCbmBnnUE6hqTSU5BIiHR8T4aG8jE2NURQhk7rnMeQSsNHkrXQ7VCjaSzjvyDUV9mVkvrh//Xc3Sa5INFyv1wnu+Mw4KxjI3nztt1AEjaCTi8SiAMlh0/NTwEkJ/9Zf/b2ezsemR9UlfgooTBV9Gf9LcofNt8aj6kOdliyiMw4Eg9jrysXLe7dnuPjw7kOiA+auKr00enevL52/9AQ056Rrb17jQxo9fdl55ee/xklmRuSATkE3nBBrY2UTasuo2JvUF4XwRLLNkMKqMwwDPHW6qQdRFEFN9zU9iasK+17fx790hSDcP9SPH6RVuVBirCMukAA7Fh9fvPD0BZbxFUzCGnKTt1QhLCB2MAQNmz87p3spRsgvf+ZFUFAtnKNvzpQUBIGqJY2uI6MB+lYpV8kdTNb9naXuPzy5/3Q5GD7xOTlFZsnttLq1pxtma1IJWpB9QEhCUHHpUpA6eC13EC//TCbvUPDchXM4Sm6iCxTpf/7etyEcn6hbcVF5DqXM0FPILQFhxUwqJWUHO/SlFPwlj3Inp466AOckWlA4B7WfvPgkDkKItvY2V63EAZQd1eZ1Z3cHXQYFnpLHtqCL3GMfpsgsSYdumKsPVl/7yS8pDOQvPAELfc+mhdNUN2cyoXAexFL26ttO0QWeBz/U2VMjKCGG9Ya6FIErQKVVA2eWbi4RGuoG4qQdwz6+pWOBTEyUINdQU0lA2q/W9MIUhY5AEYQ71++yJ+gSTX13rNoUw7Vd4+bRdbCVNkFdPTKuGaorpOuiMKMoeuAh1uViSd+B/9E/72gvhbkECwd0z6hmCrmNUvdetG7H4OcP+mlSLPUIFuBMJp0BC+aReCI+NDaIYslQHrD1OCndykptGeowZEr2BQPFXDEq47/IN9RhzJV5tdGUOsWRFVFXyC4zZzzWpu5Otla3ME6HQ1908xrhcNUNG4XLkGbNEHVRN+Hy50HXNdUttbrvkHmdlbb6a01D5ZwtFzf0N6JMImWoPMCwGrOYCPTf02TkVdeqRDYci1BrTUsYoLtN3f2RcVdevdI72Dc+M0YFTO2nOpNdKKr0QtRZzyc9yHvVTKYr7JNLEdvWl3XyJy3T1JeuknCcyqdspOVKXSWWUCOoCqtoXYijvruH+NLjqz9wEC7WUkx4kEYA0SIPnrj4BFV2c2XrpX/8DrZ+4/N/+Z1/+nf99zZTXWarVruh/+DAQSKN4pdshQ0N+VMSbbDcDP2vAAMA9Vfc2reroAcAAAAASUVORK5CYII=';


    return '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternx" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g transform = "rotate('+rot.toString()+',40,40)"> <line class="line" x1="0" y1="0" x2="50" y2="50" /><line class="line2" x1="60" y1="0" x2="0" y2="60"  /></g> </svg>';
}


function init() {


    document.getElementById("whosplaying").addEventListener('mouseup', function() {
        if(autoPlay) {
            document.getElementById("whosplaying").innerHTML="Play Against Computer";
            document.getElementById("otherplayer").innerHTML="FRIEND";

        }
        else
        {
            document.getElementById("whosplaying").innerHTML="Play Against Friend";
            document.getElementById("otherplayer").innerHTML="COMP.";

        }
        autoPlay = !autoPlay;
        numberWon = 0;
        numberLost = 0;
        numberDraw = 0;
        setStatus();
        clearBoard();

    });

    document.getElementById("backgroundselect").addEventListener('change', function Xplay() {
        switch(document.getElementById("backgroundselect").value)
        {
            case "Background 1":
            {
                document.getElementsByTagName("html")[0].style.background="url(images/Blank-chalkboard-desktop-background.jpg) no-repeat center center fixed";
                document.getElementsByTagName("html")[0].style["background-size"]="cover";
                break;
            }
            case "Background 2":
            {
                document.getElementsByTagName("html")[0].style.background="url(images/School-Chalkboard-Wallpaper-Chalk-board-texture-by.jpg) no-repeat center center fixed";
                document.getElementsByTagName("html")[0].style["background-size"]="cover";
                break;
            }
            case "Background 3":
            {
                document.getElementsByTagName("html")[0].style.background="url(images/school-chalkboard-wallpaper-photo.jpg) no-repeat center center fixed";
                document.getElementsByTagName("html")[0].style["background-size"]="cover";
                break;
            }
            case "Background 4":
            {
                document.getElementsByTagName("html")[0].style.background="url(images/Writing-on-Chalkboard-powerpoint-backgrounds.jpg) no-repeat center center fixed";
                document.getElementsByTagName("html")[0].style["background-size"]="cover";
                break;
            }
        }
    });

    Array.prototype.map.call(document.getElementsByClassName('tile'), function (element) {





          element.addEventListener('mouseup', function() {
              if(!hasWon) {
              validatePlay(element);

              if (isPlayValid) {

                  if(autoPlay) {
                      element.classList.remove('free');
                      element.classList.add('played');
                      element.classList.add('X-play');
                      element.innerHTML = drawX();
                  }
                  else
                  {
                      if(currentPlayer === "X")
                      {
                          element.classList.remove('free');
                          element.classList.add('played');
                          element.classList.add('X-play');
                          element.innerHTML = drawX();
                          currentPlayer = "O";
                      }
                      else
                      {
                          element.classList.remove('free');
                          element.classList.add('played');
                          element.classList.add('O-play');
                          element.innerHTML = circle();
                          currentPlayer = "X";
                      }
                  }

                  checkhasWon();
                  checkDraw();
                  if(autoPlay) {
                      if(!hasWon) {
                          Oplay();
                      }
                  }

              }
              }

          })

    });
    document.getElementById('reset-button').addEventListener('mouseup', function () {
        clearBoard();
    })
}
//update score board
function setStatus()
{
    document.getElementById("won").innerText=numberWon.toString();
    document.getElementById("lost").innerText=numberLost.toString();
    document.getElementById("draw").innerText=numberDraw.toString();
}

function validatePlay(squareplayed) {
    if (squareplayed.classList.contains('free')) {
        isPlayValid = true;
       
    } else {
        isPlayValid = false;
        
        return false;
    }
}

function clearBoard() {
    Array.prototype.map.call(document.getElementsByClassName('tile'), function (element) {
        element.classList.remove('played');
    });
    Array.prototype.map.call(document.getElementsByClassName('tile'), function (element) {
        element.classList.remove('O-play')
    });
    Array.prototype.map.call(document.getElementsByClassName('tile'), function (element) {
        element.classList.remove('X-play')
    });
    Array.prototype.map.call(document.getElementsByClassName('tile'), function (element) {
        element.innerHTML = '';
    });
    Array.prototype.map.call(document.getElementsByClassName('tile'), function (element) {
        element.classList.add('free')
    });
    document.getElementById("ended").innerText="";
    hasWon=false;
    stopcount = false;
    document.getElementById("markpattern").style.display = "none";
    if(roundNumber % 2 === 0)
    {
        if(autoPlay) {
            Oplay();
        }
    }

}

function checkWhoHasWon(player) {
    hasWon = true;

    if (player === "X") {
        if(!stopcount) {
            calcLine();
            numberWon += 1;
            roundNumber += 1;
            document.getElementById("ended").innerText="GAME OVER";
        }
        setStatus();
    } else {
        if(!stopcount) {
            calcLine();
            numberLost += 1;
            roundNumber += 1;
            document.getElementById("ended").innerText="GAME OVER";
        }
        setStatus();
    }
    stopcount = true;
}

function calcDraw() {
    document.getElementById("markpattern").style.display = "inherit";
    var imagedata = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAD8VJREFUeNpcmcuPXFcRxvvevt19+zndM2OPg2Mb23knDgkJQkEJhNgIJBCKhMIWsWCBkBAbVvwDSAghsYLssoBlJMgGEBHhKUhCAsSxHYfEHnvisWc8r37c2/fN73yVRoiR1e7ue06dqq+qvqo67cXnzqVlWdNf4HmVXneybCkIbqXp0VZrP89nRcHHlu83PC8py3lZDoMgr6q650VFwet2ml6J4+Pt9m6W3UiSO5rNh/t9vn9rOo2L4lCzeTwM2djw/bwsD/J8udFg5aQoLkyn9/d6K43GNM+HjQZHs77p+wFn8KHpub+qqviIZr16HS3Xms2iqtAAnbxaLauqtKrGed4PAo7EFFYigi2rzSZK+5730tbWTzY2nltbu6/b9XTGX/b3H+r1UIuVCOnU67aSvf16/dzKCuZhVVyWLOAp0kboVxc8PJugbxDwALOQCDDoAVSs28uyj7RarEE/dAIhvuR9VpYRGHheKiQ49Uy///Ljj18EpLJs+/6pdhsMYiHKGiTc0imohYRBEIDcQIe+MR4DMDbjH4cURpdyB6uxAOU4wK/VOA8Ige0bb7+Noo8MBo8PBp9fWQnrdRb/dX//Y/1+6PuYjmF8A7pjnQHAKIf2/xiPcWvH90GdkzilkGEoVyoMbmcZ7qtrIxBg/OFmEzmc7s3OnuUdqmC62RT4Pnh4OgxBWMY6IgZBrFxqNHhqccYazuB/9iIX7bfS9J5O53IUgRN7AaMrv/DKx0z2E1W8Dup1EGH96Xb7vThGp5d3dz89Gt0ZhgDmRefOVRI9kcqVDLI442NTx3M2/zJ5CkRRnTMOKfL4yPfjokBjPnI8viNFAJWHHGzbkWhGcvxGkqA6jruZJKj45/19LF9tNEYymJVIBgjnr4MsQ4PlICB40Qm5qQLLTPx3FE1BCPuq6oP5HFRIpUTJAWCkLdKROAoC3JHKGF8eSGTATErzHi3RG3gsZNGGZDzZbpMTLcXDmV6PBajo4pR3uAZr9hAqV9bloL6yBlvv7nTAADvA4I5WyxcALLg2n3+QJJz3fhT9aH39Nzs7OBoJZFYl8NiFishhS0vsMJGKnFhXVmIeK4nCP+ztzYtifT7//pUru3nu3Xr6aSIXMDrCvyYi4CT+IQ6hSCewyERPQVaTE5HFFh4NlJivHhwQrXd1OqH0qMQd/OWK1FK+Rld0gp8e7PWw6vp8DmB8vDibgRYWIueebrevKAyQUlfGNaSTZ9EgwIyZEEEMlnpkry4zqioUfjfTlAXk1NmVFeM282xNey2eeEU/kg4svTDk6X6Wsb0nIGAQFuPKdr1ODLAYcvGB7kDBHshxDgxosyxnij6XkojWAYS2p8PwiMU1UfXHvT3se3o0moucfGWAkUUsONGgJuE1eS2U8dAHKoI3qrwXRW9NJpyIl8G+L8/6RoPBhyq5U2+n6d/HY1ZQT1AL6exJFbAcs5OmpQKrrzD6ytpaR0iT5KYH8JcyAxRr+CFwhQQNwCBSYFVyCK+E6ZUogk1IPbbAcLCBPXX531GpMUaYK+SJcWOKnjg2UG425ZGhksMTYEdarZo0aCsScGUqKuFfUwcXAp7aigQoKhBUDUEAHfDo3m73yeHwwmwGVKQzOL0bRR+6bpbnLntF0DDQ1Th+pN8HgFDFazPLAtUiApZXR6lylsV1SzmxXxSlqqeviLQo5BH4gTomgSWRRIQVEkXKo/pUuwDli6urwIHf4VLWvzubOQ+y7YUbN8B3S9UAqAqVyGRBm3OVM4wLhYovc3kNxLqsIY+OhWEgOBPFpRGpNRe/3dl58dYts9l8MpRne8p0QHp9PN5MEnIZvInXVaNTnn12eZn6StwgCCRnil+syUXcbOhKBIBhk7fIUNKbPEcEqcr3kWjFF1r8I5N+trmJN2gTHhAp8BQvR1Iaz6IxhIc3Ka/WImD5Ur1O1AdG0OyhHnEYH60OYgoWNNRs9LTHUQaPREv2h64AUOiM9+P4Whx/+fDhQMxJbM1qNc7Dj8j8aLuNHzAMfsdIspVvfEUYMZPKgwgnCVIRijuDpZ9cWsI+TKdCWUOBOJTjYLh0qk6mVCyzn0plgCXicd5Dtk+NRs+urZHtc3VOKIrRdF2u/xFC6I3BdIiUslC+Q9TfDg6o0AeqcuD64tbWXJ1LkCsUjB5e3tl5cjRC347qzMkw5Gx8CictK3GgmYGqG1tQiJRGNEqgPesJps8sLyNqT53nQMxEgUO5XASWqz5SDKxd4/3Z5WVCmcoDLmD82GDAQTgn4KT7u93/piW9keVXIBbAiEhdYS7PErAzNc2cQf1iGb2AL54EVPRYj2N85OSSceJxHgEMFMiWoSz89qVLzz/44N2qVFhIrnx8MACwN8fjo2GI8ejguk38xTNO3ZjPUY5GoFAv5vhQhJaq1QzUr3I8nqIHv6/XozGMDTlaQxnTEF944sJS7BUrS1ZVeRxUvd6vH3uMIAlVJ9joqycgji1D+X7FZaJoMxRLkY91UU6mYpypYeIA3rTVlPrKeQKZQAEY1xSJuC1aXZWkSGSuMJLnvnICimoou0HudKdjth0owOm3bkibRGZ/6dChU50OBHt+OnW+wprNNAUkkmWPxMlzdD0J0YvBZ+q+KzkRLx4Xzt85cQIAjMxsXioFbaa0AAZcGUjyaDGPoKUVA/7+NZlgD6+EXaIJZVnSzIYnlpZ8my9ILl/DFlkJYG0xAlIqsbANQqWCL1Pg26zBI+qPldRChYuE7wpXG60sQG1+8RbDHJ4l6mFpUD+sxNxV2CHzRBiiH8a4KkVMAN1IkyAPOOwd6F/sbwWuUJ5ai5wKFY7fEU246NYcAE6x2qk7W62Rph0bsNrqt/CDtf8IuZ4kTY0LplNT8RPrLOt42eV4y0WZtllrAaRoaTWf5tOUM21QrK/otqLUETDUhkTas50q9PzGxm1VC2txERIv2N9UR06sefjqfE6rYj0SEdkS2dKUu9Jupa32P3/sR7mmApz5ZFdudUGj4LAOpyWuB3y+4VGPAZhKXFUn2m2UGWhGsnKOzdfznCH2tBiBRyNVdHAl/bGN8tzQOGSRsNxs4nHfku7//qwtphWxOdZaP6CCfqwdtZuBTEjwhtJm80ghzEgxywPrA8gYJnpgPq4GAauQ804UwbpTjd2/3N7GoddFhEZ47j/rtSsVV7TmyIk6T0KkUHOMa7YUEAOlVaJCBD3yEVnfunhxoujOxDWFsiRWdBfqI1yRrdX4iNfwEQBTrFCRIgGpchxTMcfhR7LbjVg4KlaPa5ahgSs1ZXmk2bTjPfUXNNpkHBoTCoYT1N9xceVM+tzKiqVwpKoMKsBsHUemjogtgOHCl9ld8u1mpSW/s36mmvtovz+XMs5IHlyKoqNGhrIMwp0vxjIi7KiGAl89LlYWmh9dH1sUkRoVbLW200ZO45dcCDU0L3gS1VPAWby/dnAwEB0cWZwL3eypuWU9Zdo3l9vkjkcQh+9YCrUQm4c1OltBROLbs9lESRToGLDBKednMxi/qY6Pje9q1o01ACfq+iN1f4QB6l6azXDW+1YhyhL5VEBi37r4QH0vkoNYgTLRLVRbeO4rR2wE9Y1UFzPIQNRqbY+7j1Asj0XNOI7DeYo9xikttUyYvSIGR4m9KIKoKHHPra2lIudYYe3aEAiB4UxzuQv5SLxHxBn/gq1dsGA3aBnv2bCai6sMNpcEaUrUg0GmkeaIpu03JxP8e4oWjyEgSYi/Qlk8USOEqSfV/dWUoXMlst1cMNbvi58NmsCK/+l2u1SyMPEwITH42m2M9VhGjK6n0HDsXKYRvq/ulPyg9bC281Cj8dp4jFo8osvADL53xUS19V5VQOQfU2G1So82LBsoYGI1+AFzol33XJfRv9vdLaX7hwVYzSd6WEdLQNDSGHHgRHKqo74qEPGmClW7hSN60GZF0Cbq+ALlIEFdqZU1z/KRsH6434dRgeAX29uv7O5at+eNn3nGCovxtV2gsaijgYKDqS2I2FajQi0iNimxuzqA8wjhM0xvmr/t5iLWpHBxNmMNk9Zaq4U3ARgPtGUwKzd1rYXMjiomAQD8WxonEUhr6Tg3FQmZpzKpWJdmpqINOUOxcy/PiTx87wBbaIAHwXvJhsSqYmR4azrtKTnwF0Mex/z42jVrg+171yYUhdFkpmx1gdtoUEJqQsvd1YQKeU4lF9oi6JqYpqV4t5tIVLmhss0gajeR1t0+oHti/BJrIID/GGmGC6/ZrSfO+uaxYy1d/lo9/unGRqV5LhG1hrqlSXQHw6iiqBAeqFVf3LRggfVre0oNa+748pguw3NVFdA9IZq16mQzMVH4yt7eBUE1UQOIBMBjMYgS18i5pQLw9aNHidR7ul07BS/7i6bN/ONaIvx6V7ttltldkoGBNS3dV9l9UKHGBvcRBG+Mx3/a37dbMZuP7+528SA58avbt1lP++uLcq0w4D6QvpUk3718ORFm0NuOLvHt2sw69Zl42PG+1Qfkkj49gWkdH9rgDisXzCRUnqnICYlA/VqWfWo4xMVEw+93d5vq2CIVgB2VzmcPH4YOgMoudtoqlFDJ906dssbVqn5ffW9dGU2GWYHKXFERBqm4NNKdkfVrdk1lP29wANtIY5yLfeynB8cv1q0/Ohg8NRyybFOPWPxQr8dHqhDBR1Owqyu/h3u9ka4RyI+v/vOf5KkVcrs5q4lIqbP2pbuLovVhtbsk1mWp9QjG5sZq1nkSOpdV1D2VWxsAl/UDBx0LFR04sZ7KzUp2ERI/v3kzUcH4xGCQqVmAF0D0hTNnjI+sKcdLlabiliLKWsjaMf3y4atfqMT11i7aBXhf45q1PTjORkVqRalqT/LaTzoYSreNr0nA544cQSzo2qUypD+TGRxxYTZjoofQWWw/R+Ara0BC/fJgl6CB3Sh3pa9NYPbjzFTutxE0VV2znB1o3DXWYOXr4zEZh2aWVlTZuZ4ShTgR4iWk0jB090IagYh9dHV3GWn66sEBMr+wuprplGJxZUx8uV9d+uJSdyMizrW8sDs7y0F3UyXM+YbQrvRTFu+38vx+DSNNXUagnPOvBh4SjapMtEHugYZs2+6rtULXnu7S7RcdDp3LM/YzgAshe5AtZhsColQFxWK74skX48pAYcTfjfmc81hDqrqfvlT4urpuCCWaZGRjZlSpLq9lg6us5SNYLqk2D5SnvozP1eTYvVBg9z441YbBtu4O7NKCI2NxTKnigHcIEXiI6PYXPz/xt63bbDLupe1tHtGeUwHfTBLAG2q8qy+acouhyoYiUbT1fYAS6jIiF2buy5Y67vX53PLOWkLYaF83RH0B0FQt4g2wm9E13YrPtXFPowF58MRwSPkjpH5w9Sos+LXz53+4vt5QUtvYl6lC2GRVakqomSjxkf2UZJeJ/xFgAA5Q4qSflL8HAAAAAElFTkSuQmCC';
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="0" y1="0" x2="100" y2="95" /><line class="winline2" x1="80" y1="0" x2="0" y2="95" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;




}
function calcLine() {

    document.getElementById("markpattern").style.display = "inherit";

    var imagedata = 'data:image/png;base64,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';



    if (sq1.classList.contains('X-play') && sq2.classList.contains('X-play') && sq3.classList.contains('X-play')) {


        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="0" y1="15" x2="100" y2="15" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    } else if (sq1.classList.contains('O-play') && sq2.classList.contains('O-play') && sq3.classList.contains('O-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="0" y1="15" x2="100" y2="15" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    }

    else if (sq4.classList.contains('X-play') && sq5.classList.contains('X-play') && sq6.classList.contains('X-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="0" y1="40" x2="100" y2="40" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    } else if (sq4.classList.contains('O-play') && sq5.classList.contains('O-play') && sq6.classList.contains('O-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="0" y1="40" x2="100" y2="40" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    }

    else if (sq7.classList.contains('X-play') && sq8.classList.contains('X-play') && sq9.classList.contains('X-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="0" y1="65" x2="100" y2="65" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    } else if (sq7.classList.contains('O-play') && sq8.classList.contains('O-play') && sq9.classList.contains('O-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="0" y1="65" x2="100" y2="65" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    }

    else if (sq1.classList.contains('X-play') && sq4.classList.contains('X-play') && sq7.classList.contains('X-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="20" y1="0" x2="20" y2="95" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    } else if (sq1.classList.contains('O-play') && sq4.classList.contains('O-play') && sq7.classList.contains('O-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="20" y1="0" x2="20" y2="95" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    }

    else if (sq5.classList.contains('X-play') && sq2.classList.contains('X-play') && sq8.classList.contains('X-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="45" y1="0" x2="45" y2="95" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    } else if (sq5.classList.contains('O-play') && sq2.classList.contains('O-play') && sq8.classList.contains('O-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="45" y1="0" x2="45" y2="95" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    }

    else if (sq6.classList.contains('X-play') && sq9.classList.contains('X-play') && sq3.classList.contains('X-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="70" y1="0" x2="70" y2="95" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    } else if (sq6.classList.contains('O-play') && sq9.classList.contains('O-play') && sq3.classList.contains('O-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="70" y1="0" x2="70" y2="95" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    }

    else if (sq1.classList.contains('X-play') && sq5.classList.contains('X-play') && sq9.classList.contains('X-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="0" y1="0" x2="100" y2="95" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    } else if (sq1.classList.contains('O-play') && sq5.classList.contains('O-play') && sq9.classList.contains('O-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="0" y1="0" x2="100" y2="95" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    }

    else if (sq5.classList.contains('X-play') && sq7.classList.contains('X-play') && sq3.classList.contains('X-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="80" y1="0" x2="0" y2="95" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    } else if (sq5.classList.contains('O-play') && sq7.classList.contains('O-play') && sq3.classList.contains('O-play')) {
        var line = '<svg id="right_arrow"  class="direction__right direction__item" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="360px" height="320px" viewBox="0 0 80 80" xml:space="preserve"> <pattern id="patternmark" patternUnits="userSpaceOnUse" width="100" height="100"> <image xlink:href="'+imagedata+'" x="0" y="0" width="100" height="100"></image> </pattern> <g> <line class="winline" x1="80" y1="0" x2="0" y2="95" /></g> </svg>';
        document.getElementById("markpattern").innerHTML=line;

    }
}

function checkhasWon() {

    if (sq1.classList.contains('X-play') && sq2.classList.contains('X-play') && sq3.classList.contains('X-play')) {
        checkWhoHasWon("X");
    } else if (sq1.classList.contains('O-play') && sq2.classList.contains('O-play') && sq3.classList.contains('O-play')) {
        checkWhoHasWon("O");
    }

    else if (sq4.classList.contains('X-play') && sq5.classList.contains('X-play') && sq6.classList.contains('X-play')) {
        checkWhoHasWon("X");
    } else if (sq4.classList.contains('O-play') && sq5.classList.contains('O-play') && sq6.classList.contains('O-play')) {
        checkWhoHasWon("O");
    }

    else if (sq7.classList.contains('X-play') && sq8.classList.contains('X-play') && sq9.classList.contains('X-play')) {
        checkWhoHasWon("X");
    } else if (sq7.classList.contains('O-play') && sq8.classList.contains('O-play') && sq9.classList.contains('O-play')) {
        checkWhoHasWon("O");
    }

    else if (sq1.classList.contains('X-play') && sq4.classList.contains('X-play') && sq7.classList.contains('X-play')) {
        checkWhoHasWon("X");
    } else if (sq1.classList.contains('O-play') && sq4.classList.contains('O-play') && sq7.classList.contains('O-play')) {
        checkWhoHasWon("O");
    }

    else if (sq5.classList.contains('X-play') && sq2.classList.contains('X-play') && sq8.classList.contains('X-play')) {
        checkWhoHasWon("X");
    } else if (sq5.classList.contains('O-play') && sq2.classList.contains('O-play') && sq8.classList.contains('O-play')) {
        checkWhoHasWon("O");
    }

    else if (sq6.classList.contains('X-play') && sq9.classList.contains('X-play') && sq3.classList.contains('X-play')) {
        checkWhoHasWon("X");
    } else if (sq6.classList.contains('O-play') && sq9.classList.contains('O-play') && sq3.classList.contains('O-play')) {
        checkWhoHasWon("O");
    }

    else if (sq1.classList.contains('X-play') && sq5.classList.contains('X-play') && sq9.classList.contains('X-play')) {
        checkWhoHasWon("X");
    } else if (sq1.classList.contains('O-play') && sq5.classList.contains('O-play') && sq9.classList.contains('O-play')) {
        checkWhoHasWon("O");
    }

    else if (sq5.classList.contains('X-play') && sq7.classList.contains('X-play') && sq3.classList.contains('X-play')) {
        checkWhoHasWon("X");
    } else if (sq5.classList.contains('O-play') && sq7.classList.contains('O-play') && sq3.classList.contains('O-play')) {
        checkWhoHasWon("O");
    }
}

function checkDraw() {
    if(document.getElementsByClassName('free').length === 0) {

        if(!hasWon) {
            if(!stopcount) {
                numberDraw += 1;
                roundNumber += 1;
                calcDraw();
                document.getElementById("ended").innerText="GAME OVER";
            }
        }
        stopcount = true;
        hasWon = true;
        setStatus();

    }
}


function Oplay() {

    //AI Logic for o play

    //check best play and see if play is valid
    function Oplaying(square) {

        validatePlay(square);

        if (isPlayValid) {
            square.classList.remove('free');
            square.classList.add('played');
            square.classList.add('O-play');
            square.innerHTML = circle();
        } else {
            Orandomplay()
        }

    }

    // Function for when O plays randomly
    function Orandomplay() {
        for (var i = 0; i < 10; i++) {

            var randomNumber = Math.floor((Math.random() * 9) + 1);
            var randomSquare = document.getElementById('square' + randomNumber);
            validatePlay(randomSquare);

            if (isPlayValid) {

                randomSquare.classList.remove('free');
                randomSquare.classList.add('played');
                randomSquare.classList.add('O-play');
                randomSquare.innerHTML = circle();
                break;
            }
        }
    }


    // If X plays here pick the best play to win based on available tiles O-O-O = win

    var hasWon123_sq3 = ( sq1.classList.contains('X-play') && sq2.classList.contains('X-play') || sq1.classList.contains('O-play') && sq2.classList.contains('O-play') ) && !(sq3.classList.contains('played'));
    var hasWon123_sq2 = ( sq1.classList.contains('X-play') && sq3.classList.contains('X-play') || sq1.classList.contains('O-play') && sq3.classList.contains('O-play') ) && !(sq2.classList.contains('played'));
    var hasWon123_sq1 = ( sq3.classList.contains('X-play') && sq2.classList.contains('X-play') || sq3.classList.contains('O-play') && sq2.classList.contains('O-play') ) && !(sq1.classList.contains('played'));

    var hasWon456_sq6 = ( sq4.classList.contains('X-play') && sq5.classList.contains('X-play') || sq4.classList.contains('O-play') && sq5.classList.contains('O-play') ) && !(sq6.classList.contains('played'));
    var hasWon456_sq5 = ( sq4.classList.contains('X-play') && sq6.classList.contains('X-play') || sq4.classList.contains('O-play') && sq6.classList.contains('O-play') ) && !(sq5.classList.contains('played'));
    var hasWon456_sq4 = ( sq5.classList.contains('X-play') && sq6.classList.contains('X-play') || sq5.classList.contains('O-play') && sq6.classList.contains('O-play') ) && !(sq4.classList.contains('played'));

    var hasWon789_sq9 = ( sq7.classList.contains('X-play') && sq8.classList.contains('X-play') || sq7.classList.contains('O-play') && sq8.classList.contains('O-play') ) && !(sq9.classList.contains('played'));
    var hasWon789_sq8 = ( sq7.classList.contains('X-play') && sq9.classList.contains('X-play') || sq7.classList.contains('O-play') && sq9.classList.contains('O-play') ) && !(sq8.classList.contains('played'));
    var hasWon789_sq7 = ( sq8.classList.contains('X-play') && sq9.classList.contains('X-play') || sq8.classList.contains('O-play') && sq9.classList.contains('O-play') ) && !(sq7.classList.contains('played'));

    var hasWon147_sq7 = ( sq1.classList.contains('X-play') && sq4.classList.contains('X-play') || sq1.classList.contains('O-play') && sq4.classList.contains('O-play') ) && !(sq7.classList.contains('played'));
    var hasWon147_sq4 = ( sq1.classList.contains('X-play') && sq7.classList.contains('X-play') || sq1.classList.contains('O-play') && sq7.classList.contains('O-play') ) && !(sq4.classList.contains('played'));
    var hasWon147_sq1 = ( sq4.classList.contains('X-play') && sq7.classList.contains('X-play') || sq4.classList.contains('O-play') && sq7.classList.contains('O-play') ) && !(sq1.classList.contains('played'));

    var hasWon528_sq8 = ( sq5.classList.contains('X-play') && sq2.classList.contains('X-play') || sq5.classList.contains('O-play') && sq2.classList.contains('O-play') ) && !(sq8.classList.contains('played'));
    var hasWon528_sq2 = ( sq5.classList.contains('X-play') && sq8.classList.contains('X-play') || sq5.classList.contains('O-play') && sq8.classList.contains('O-play') ) && !(sq2.classList.contains('played'));
    var hasWon528_sq5 = ( sq2.classList.contains('X-play') && sq8.classList.contains('X-play') || sq2.classList.contains('O-play') && sq8.classList.contains('O-play') ) && !(sq5.classList.contains('played'));

    var hasWon693_sq3 = ( sq6.classList.contains('X-play') && sq9.classList.contains('X-play') || sq6.classList.contains('O-play') && sq9.classList.contains('O-play') ) && !(sq3.classList.contains('played'));
    var hasWon693_sq9 = ( sq6.classList.contains('X-play') && sq3.classList.contains('X-play') || sq6.classList.contains('O-play') && sq3.classList.contains('O-play') ) && !(sq9.classList.contains('played'));
    var hasWon693_sq6 = ( sq9.classList.contains('X-play') && sq3.classList.contains('X-play') || sq9.classList.contains('O-play') && sq3.classList.contains('O-play') ) && !(sq6.classList.contains('played'));

    var hasWon159_sq9 = ( sq1.classList.contains('X-play') && sq5.classList.contains('X-play') || sq1.classList.contains('O-play') && sq5.classList.contains('O-play') ) && !(sq9.classList.contains('played'));
    var hasWon159_sq5 = ( sq1.classList.contains('X-play') && sq9.classList.contains('X-play') || sq1.classList.contains('O-play') && sq9.classList.contains('O-play') ) && !(sq5.classList.contains('played'));
    var hasWon159_sq1 = ( sq5.classList.contains('X-play') && sq9.classList.contains('X-play') || sq5.classList.contains('O-play') && sq9.classList.contains('O-play') ) && !(sq1.classList.contains('played'));

    var hasWon573_sq3 = ( sq5.classList.contains('X-play') && sq7.classList.contains('X-play') || sq5.classList.contains('O-play') && sq7.classList.contains('O-play') ) && !(sq3.classList.contains('played'));
    var hasWon573_sq5 = ( sq5.classList.contains('X-play') && sq3.classList.contains('X-play') || sq5.classList.contains('O-play') && sq3.classList.contains('O-play') ) && !(sq5.classList.contains('played'));
    var hasWon573_sq7 = ( sq7.classList.contains('X-play') && sq3.classList.contains('X-play') || sq7.classList.contains('O-play') && sq3.classList.contains('O-play') ) && !(sq7.classList.contains('played'));


   

    // win by 1 2 3
    if (hasWon123_sq3) {
        Oplaying(sq3)
    } else if (hasWon123_sq2) {
        Oplaying(sq2)
    } else if (hasWon123_sq1) {
        Oplaying(sq1)
    }

    // win by 4 5 6
    else if (hasWon456_sq6) {
        Oplaying(sq6)
    } else if (hasWon456_sq5) {
        Oplaying(sq5)
    } else if (hasWon456_sq4) {
        Oplaying(sq4)
    }

    // win by 7 8 9
    else if (hasWon789_sq9) {
        Oplaying(sq9)
    } else if (hasWon789_sq8) {
        Oplaying(sq8)
    } else if (hasWon789_sq7) {
        Oplaying(sq7)
    }

    // win by 1 4 7
    else if (hasWon147_sq7) {
        Oplaying(sq7)
    } else if (hasWon147_sq4) {
        Oplaying(sq4)
    } else if (hasWon147_sq1) {
        Oplaying(sq1)
    }

    // win by 5 2 8
    else if (hasWon528_sq8) {
        Oplaying(sq8)
    } else if (hasWon528_sq2) {
        Oplaying(sq2)
    } else if (hasWon528_sq5) {
        Oplaying(sq5)
    }

    // win by 6 9 3
    else if (hasWon693_sq3) {
        Oplaying(sq3)
    } else if (hasWon693_sq9) {
        Oplaying(sq9)
    } else if (hasWon693_sq6) {
        Oplaying(sq6)
    }

    // win by 1 5 9
    else if (hasWon159_sq9) {
        Oplaying(sq9)
    } else if (hasWon159_sq5) {
        Oplaying(sq5)
    } else if (hasWon159_sq1) {
        Oplaying(sq1)
    }

    // win by 5 7 3
    else if (hasWon573_sq3) {
        Oplaying(sq3)
    } else if (hasWon573_sq7) {
        Oplaying(sq7)
    } else if (hasWon573_sq5) {
        Oplaying(sq5)
    }


    else {
      //random move
        Orandomplay();
    }
    
    checkDraw();
    //check to see if O has won the game
    checkhasWon();
}





