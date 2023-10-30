const circle = {
    radias: 2,
    // area: function() {
    //     return Math.pow(Math.PI, 2)
    // } แบบเต็ม
    area() {
        return Math.PI *  Math.pow(this.radias, 2) //แบบยุบ
    },

    equals(compareCircle) {
        return this.radias === compareCircle.radias
    }
}

console.log(circle);
console.log(circle.radias);
console.log(circle.area());
console.log(circle.equals({radias: 2}));
console.log(circle.equals({radias: 3}));

console.log(JSON.stringify(circle));
if(JSON.stringify(circle) === '{}') console.log('empty object'); 
else console.log('not empty object');
// if(circle.length === 0) console.log('empty object'); 