let message = '';

const targetDate = new Date('2024-02-07T00:00:00');

function updateElapsedTime() {
    const now = new Date();
    const elapsedMilliseconds = now - targetDate;
    const seconds = Math.floor((elapsedMilliseconds / 1000) % 60);
    const minutes = Math.floor((elapsedMilliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedMilliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24));
    const formattedTime = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
    document.querySelector('.message-text').innerHTML = `
        Today (or whenever you get this) marks ${formattedTime} that we've been together. I couldn't
        have wished for someone else to spend an entire year with. Throughout the year, we've done so
        many things together, spent so much time together, went to so many places, sent so many
        pictures with silly filters, learned so much about each other, and did every silly thing imaginable. 
        I know I've kept saying this in the past, but I genuinely do mean
        it when I say that when we got together, I've started looking forward to tomorrows more, because I
        know that it'll be another day that I get to spend with you. I know I'm not the best person and
        that I can be a little silly in a bad way sometimes, but every day that I'm with you, I can't
        help but try to be my best for you. You've helped me so much in so many ways you can't even imagine.
        You've genuinely given me so much joy this past year, and I
        can't thank you enough for it. I hope that I've been able to make you happy as much as you have
        for me. I know that we've had our ups and downs, but throughout all of that, I'm happy to
        announce the my love for you is undying (RIZZ). I want to keep doing more things with you,
        making more memories with you, spending more time with you, going to new places, eating new
        food, watching new shows, listening to new IVE releases, and all the other things. I want to
        keep loving you for as long as I can and that we continue to have each other, and that you
        continue to be the sigma to my whar the. Happy 1 year to us baby, I love you!
        <br />
        <br />
        Forever yours, Tatine :3
        <br />
        <br />
        And with that in mind...
    `;
}

setInterval(updateElapsedTime, 1000);

updateElapsedTime();

document.querySelector('.bgm').volume = 0.5;

const music = document.querySelector('.bgm');
const snows = document.querySelector('.snowflakes');
const snow = document.querySelector('.snowflake');

let yes = document.querySelector('.yes');
let no = document.querySelector('.no');

no.addEventListener('mouseover', () => {
    no.innerHTML = 'Yes!';
    no.classList.add('yes');
    yes.innerHTML = 'No.';
    yes.classList.remove('yes');
});

no.addEventListener('mouseout', () => {
    no.innerHTML = 'No.';
    no.classList.remove('yes');
    yes.innerHTML = 'Yes!';
    yes.classList.add('yes');
});

let layout2 = `
    <audio class="bgm" src="pics/yippee.mp3" autoplay></audio>
    <div class="layout2">
        <div class="yay-header">
            <p class="yay">Yay! :3</p>
        </div>
        <div class="message2-header">
        <p class="message2">
        Thank you for being with me all this time. 
        <br>
        Many more months and hopefully years with you. 
        <br>
        Hope u liked this little gift I made hehe
        <br>
        I love you so much baby! :333
        </p>
        </div>
        <div class="cinnapurin-header">
            <img class="cinnapurin" src="pics/purincinna.png" />
        </div>
    </div>`;

yes.addEventListener('click', () => {
    document.body.innerHTML = layout2;
    document.body.appendChild(music);
    document.body.appendChild(snows);
    document.body.appendChild(snow);
});

no.addEventListener('click', () => {
    document.body.innerHTML = layout2;
    document.body.appendChild(music);
    document.body.appendChild(snows);
    document.body.appendChild(snow);
});
