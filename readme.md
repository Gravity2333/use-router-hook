## useRouter

使用方式

```javascript

function RouterComponent(){
    const [history, OutLet] = useRouter({
    routes: [
      {
        pathname: '/home',
        component: Home
      },
      {
        pathname: '/about',
        component: About
      }
    ]
    callbacks: [...callbacks],
    initialPath:  '/home',
  });

  return <>
    <menu>
      <button onClick={()=>history.back()}><</button>
      <button onClick={()=>history.push('/home')}>Home</button>
      <button onClick={()=>history.push('/about')}>About</button>
      <button onClick={()=>history.forward()}>></button>
    </menu>
    <OutLet/>
  </>
}

```
# use-router
