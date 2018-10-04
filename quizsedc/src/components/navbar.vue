<template>
<nav>
    <ul>
        <li><a>Home</a></li>
        <li><a>About</a>
        <ul>
            <li><a>Our Team</a></li>
            <li><a>SEDC</a></li>
        </ul>
        </li>
        <li><a>Quiz</a></li>
        <li><a>Contact</a></li>
    </ul>
</nav>
</template>

<script>
export default {

}
</script>

<style>
nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: rgba (0,0,0,0.6);
    padding: 0 ppx;
    box-sizing: border-box;
}

ul {
    margin : 0px;
    padding: 0px;
    list-style: none;
}
ul li {
    float: left;
    width: 200px;
    height: 40px;
    background-color: black;
    opacity: .8;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
}
ul li a {
    text-decoration: none;
    color : white;
    display: block;
}
ul li a:hover {
    background: rgb(0, 128, 128);
    cursor :default
}
ul li ul li {
    display: none;

}
ul li:hover ul li {
    display: block;
}
</style>
