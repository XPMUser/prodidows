// Save Character Button callback
var nS = this.findElement(w.Button, "saveCharacterButton");
nS.downloadForCharacter = function(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {
        type: contentType
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    return !0
};
S.Util.isValid(nS) && (nS.onClickCallback = function() {
    var p = this.game.prodigy.player,
        character = {
            achievements: p.achievements.data,
            appearance: {
                gender: p.appearance.gender,
                hairColor: p.appearance.hairColor,
                hairStyle: p.appearance.hairStyle,
                eyeColor: p.appearance.eyeColor,
                face: p.appearance.face,
                name: p.appearance.name,
                skinColor: p.appearance.skinColor
            },
            backpack: p.backpack.data,
            data: p.data,
            equipment: {
                boots: p.equipment.boots,
                follow: p.equipment.follow,
                hat: p.equipment.hat,
                outfit: p.equipment.outfit,
                spellRelic: p.equipment.spellRelic,
                weapon: p.equipment.weapon
            },
            house: p.house.data,
            immortal: p.immortal,
            isMember: p.isMember,
            kennel: p.kennel.data,
            broadcastId: p.broadcastId,
            battleCounter: p.battleCounter,
            catchAttempt: p.catchAttempt,
            justLeveled: p.justLeveled,
            quests: p.quests.data,
            saveEnabled: p.saveEnabled,
            spellStreak: p.spellStreak,
            starsEarned: p.starsEarned,
            state: p.state.data,
            tutorial: p.tutorial.data,
            userID: p.userID,
            gameVersion: this.game.prodigy.version
        };
    var saveCode = prompt("Please copy the code below to save your progress and use it next time you play:", JSON.stringify(character));
    this.downloadForCharacter(saveCode, this.game.prodigy.player.name.getFullName() + ".json", "text/plain");
});
