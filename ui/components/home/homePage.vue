<template>
    <div>
        <h1>Home page</h1>
        <ul>
            <li>
                <a @click="$router.push('/register')">Register</a>
            </li>
            <li>
                <a @click="$router.push('/login')">Login</a>
            </li>
        </ul>
    </div>
</template>