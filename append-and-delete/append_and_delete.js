function appendAndDelete(s, t, k) {
    let same = "";
    let restS;
    let restT;
    let i = 0;

    while (s[i] == t[i] && i < s.length) {
        same += s[i];
        i++
    }

    restS = s.length - same.length;
    restT = t.length - same.length;

    if (restS == restT) {
        if (restS + restT <= k) {
            return "Yes";
        }
    } else if (restS < restT) {
        if (k >= restS + restT) {
            if ((restT % 2 == 0 && k % 2 == 0) || (restT % 2 != 0 && k % 2 != 0)) {
                return "Yes";
            }
        }
    } else {
        if (k >= restS + restT) {
            if (k >= s.length + t.length) {
                return "Yes";
            } else if ((restS % 2 == 0 && k % 2 == 0) || (restS % 2 != 0 && k % 2 != 0)) {
                return "Yes";
            }
        }
    }
    return "No";
}

let string1 = "ashley";
let string2 = "ash";
let k = 2;

console.log(appendAndDelete(string1, string2, k));