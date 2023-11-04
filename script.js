(function () {
    const tests = {
        supplyAmmoNormal: {
            name: 'Supply/Ammo Drop',
            icons: ['german', 'soviet', 'usa'],
            sounds: [
                'ger supply.mp3',
                'sov supply.mp3',
                'us supply.mp3',
                'ger ammo.mp3',
                'sov ammo.mp3',
                'us ammo.mp3',
            ],
        },
        supplyAmmoBrit: {
            name: 'British Supply/Ammo Drop',
            icons: ['british'],
            sounds: [
                'brit supply.mp3',
                'brit ammo.mp3',
            ]
        },

        br1:{name:'break'},

        airheadStandard: {
            name: 'Airhead',
            icons: ['german', 'soviet', 'usa'],
            sounds: [
                'ger airhead.mp3',
                'sov airhead.mp3',
                'us airhead.mp3',
            ]
        },
        airheadBrit: {
            name: 'British Airhead',
            icons: ['british'],
            sounds: [
                'brit airhead.mp3'
            ]
        },

        br2:{name:'break'},

        recon: {
            name: 'Recon',
            icons: ['british', 'german', 'soviet', 'usa'],
            sounds: [
                'brit recon.mp3',
                'ger recon.mp3',
                'sov recon.mp3',
                'us recon.mp3',
            ]
        },

        br3:{name:'break'},

        bombingRunNormal: {
            name: 'Bombing Run',
            icons: ['german', 'usa'],
            sounds: [
                'ger bomb.mp3',
                'us bomb.mp3',
            ]
        },
        bombingRunBrit: {
            name: 'British Bombing Run',
            icons: ['british'],
            sounds: [
                'brit bomb.mp3',
            ]
        },
        bombingRunSov: {
            name: 'Soviet Katyusha Strike',
            icons: ['soviet'],
            sounds: [
                'sov bomb.mp3'
            ]
        },

        br4:{name:'break'},

        precisionUsSov: {
            name: 'Precision Strike',
            icons: ['soviet', 'usa'],
            sounds: [
                'us precision.mp3',
                'sov precision.mp3',
            ]
        },
        precisionGer: {
            name: 'German Precision Stuka',
            icons: ['german'],
            sounds: [
                'ger precision.mp3'
            ]
        },
        precisionBrit: {
            name: 'British Precision Strike',
            icons: ['british'],
            sounds: [
                'brit precision.mp3'
            ]
        },

        br5:{name:'break'},

        strafingRun: {
            name: 'Strafing Run',
            icons: ['german', 'soviet', 'usa'],
            sounds: [
                'ger strafe.mp3',
                'sov strafe.mp3',
                'us strafe.mp3',
            ]
        },
        strafingRunBrit: {
            name: 'British Strafing Run',
            icons: ['british'],
            sounds: [
                'brit strafe.mp3',
            ]
        },
    }

    function randChoice(arr) {
        arr = arr || []
        return arr[Math.floor(Math.random() * arr.length)]
    }

    $(window).init(function () {
        console.log("window init");

        const audio = $("#audio")
        const audioClip = $("#audio-clip")
        const optionsDiv = $("#options")
        const referenceDiv = $("#reference")
        const btnSubmit = $("#submit")
        let answer;

        audio.on('ended', function () {
            console.log('ended')
        })

        $(document).on('change', 'input[name="soundType"]', function (e) {
            const selected = $("input[name='soundType']:checked").attr('id');

            btnSubmit.attr("disabled", !selected)
        })

        function newTest() {
            const randKey = randChoice(Object.keys(tests))
            if (randKey === answer) {
                return newTest()
            }
            answer = randKey
            const randSound = randChoice(tests[answer].sounds)
            if (!randSound) {
                return
            }

            console.log(answer, randSound)

            try {
                audioClip.attr("src", './audio/' + randSound);
                audio[0].pause();
                audio[0].load();
                audio[0].oncanplaythrough = audio[0].play();
            } catch (e) {
                console.error(e)
            }

            $("input[name='soundType']").prop("checked", false)
        }

        Object.keys(tests).forEach(key => {
            const test = tests[key];
            if (test.name === "break") {
                optionsDiv.append("<hr>")
                referenceDiv.append("<hr>")
            } else {
                const iconsHtml = []
                test.icons.forEach(icon => {
                    iconsHtml.push(`<img src='./img/${icon}.png' width="20">`)
                })
                optionsDiv.append(`
                    <div class="form-check">
                      <input class="form-check-input sound-radio" type="radio" name="soundType" id="${key}">
                      <label class="form-check-label" for="${key}">
                        <div class="icons" style="width:80px;display:inline-block;" align="right">${iconsHtml.join("")}</div> ${test.name} 
                      </label>
                    </div>
                `)

                const randSound = randChoice(tests[key].sounds)
                referenceDiv.append(`
                    <div class='sound-ref'>
                        <h6>${test.name} ${iconsHtml.join("")}</h6>
                        <audio controls preload="none"><source type="audio/mpeg" src="./audio/${randSound}"></audio>
                    </div>
                `)
            }
        })

        btnSubmit.click(function () {
            const selected = $("input[name='soundType']:checked").attr('id');

            console.log(selected, '===', answer)
            if (selected === answer) {
                alert('Correct')
            } else {
                alert('Wrong')
            }

            newTest()
        })

        newTest()
    })
}());
