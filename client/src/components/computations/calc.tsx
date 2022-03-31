function strToArr(x : string) : number[]
{
    let x_arr : number[] = [];

    for (let c of x)
    {
        if (c == '0')

            x_arr.push(0);
        else if (c == '1')
            x_arr.push(1);
        else
            throw new Error("Invalid symbol" + c);
    }

    x_arr.reverse();
    return x_arr;
}

function arrToStr(x_arr : number[]) : string
{
    let s : string = "";
    let sign : string = "";

    for (let d of x_arr)
    {
        if (d == -1)
            sign = "-";
        else
            s = d.toString() + s;

    }

    let ind = -1;
    for (let i=0; i<s.length; i++)
        if (s[i] != '0')
        {
            ind = i;
            break;
        }

    if (ind == -1)
        return "0";
    else
        return sign + s.substring(ind);
}

function add_arr(a : number[], b : number[]) : number[]
{
    let n : number = Math.max(a.length, b.length);
    let c : number[] = [];

    let carry : number = 0;
    for (let i=0; i<n; i++)
    {
        let s : number = carry;
        if (i<a.length) s += a[i];
        if (i<b.length) s += b[i];

        c.push(s % 2);
        // @ts-ignore
        carry = Math.trunc(s / 2);
    }

    if (carry != 0)
        c.push(carry)

    return c;
}

function mul_arr(a : number[], b : number[]) : number[]
{
    let n : number = a.length + b.length + 1;
    let c : number[] = new Array(n);

    for (let i=0; i<n; i++) c[i] = 0;

    let carry : number = 0;
    for (let i=0; i<a.length; i++)
        for (let j=0; j<b.length; j++)
            c[i+j] += a[i] * b[j];

    for (let i=0; i<n-1; i++)
    {
        // @ts-ignore
        c[i+1] += Math.trunc(c[i]/2);
        c[i] = c[i] % 2;
    }

    return c;
}

function compl(a : number[]) : number[]
{
    let ac : number[] = [];

    for (let d of a) ac.push(1-d);

    return add_arr(ac, [1]).slice(0, a.length)
}

function sub_arr(a0 : number[], b0 : number[]) : number[]
{
    let a = a0.slice(0, a0.length);
    let b = b0.slice(0, b0.length);
    let n : number = Math.max(a.length, b.length) + 2;

    while (a.length < n) a.push(0);
    while (b.length < n) b.push(0);

    let bc : number[] = compl(b);
    let cc : number[] = add_arr(a, bc);

    if (cc[n-1] == 1)
    {
        cc = compl(cc.slice(0, n));
        cc[n-1] = -1;
    }

    return cc.slice(0, n);
}

function div_arr(a : number[], b : number[]) : number[]
{
    if (b.indexOf(1) == -1)
        throw new Error("Division by zero!!");

    if (a.length < b.length) return [0];

    let c : number[] = [];
    let n : number = a.length - b.length;

    for (let i = n; i>=0; i--)
    {
        let q : number[] = [];
        for (let j=0; j<i; j++)
            q.push(0);
        q.push(1);

        let bq : number[] = mul_arr(b, q);
        let rq : number[] = sub_arr(a, bq);

        if (rq[rq.length-1] == -1)
            c.push(0);
        else
        {
            c.push(1);
            a = rq.slice(0, rq.length-1);
        }
    }

    c.reverse();
    return c;
}

export function add(a : string, b : string) : string
{
    let a_arr : number [] = strToArr(a);
    let b_arr : number [] = strToArr(b);

    let c_arr = add_arr(a_arr, b_arr);

    return arrToStr(c_arr);
}

export function sub(a : string, b : string) : string
{
    let a_arr : number [] = strToArr(a);
    let b_arr : number [] = strToArr(b);

    let c_arr = sub_arr(a_arr, b_arr);

    return arrToStr(c_arr);
}


export function mul(a : string, b : string) : string
{
    let a_arr : number [] = strToArr(a);
    let b_arr : number [] = strToArr(b);

    let c_arr = mul_arr(a_arr, b_arr);

    return arrToStr(c_arr);
}

export function div(a : string, b : string) : string
{
    let a_arr : number [] = strToArr(a);
    let b_arr : number [] = strToArr(b);

    let q_arr = div_arr(a_arr, b_arr);

    let bq_arr = mul_arr(q_arr, b_arr);
    let r_arr = sub_arr(a_arr, bq_arr);

    return arrToStr(q_arr); //+ "|" + arrToStr(r_arr);
}



//console.log(strToArr("1011"));

// console.log(sub("11", "111"));


// console.log(sub("11", "0"));
// console.log(sub("0", "111"));
// console.log(sub("0", "0"));


// console.log(div("111", "111"));
// console.log(div("1", "1"));
// console.log(div("110", "111"));
// console.log(div("11100", "111"));


let a = "111000111111111111111111111111111111111111111111111111111111111111111111111111111111111111";
let b = "111";
let op = "/";

let c : string = "";

if (op == "+")
    c = add(a, b);
else if (op == "-")
    c = sub(a, b);
else if (op == "*")
    c = mul(a, b);
else if (op == "/")
    c = div(a, b);


console.log(c);

