function outer()
{
    console.log("hello from outer");
    function inner()
    {
        console.log("hello from inner");
    }
    inner()
}
outer()