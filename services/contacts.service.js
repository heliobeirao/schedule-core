contactsServer = function () {
    this.contacts = [
        {
            idContact: 1,
            name: 'Hélio',
            age: 27,
            telephones: [
                '1111-1111',
                '2222-2222'
            ]
        },
        {
            idContact: 2,
            name: 'E Agora José',
            age: 89,
            telephones: [
                '3333-3333',
                '4444-4444'
            ]
        }
    ];


    this.getContacts = function(id) {
        self = this;
        if (id) {
            return self.contacts.find(function (element, index, array) {
                return element.idContact === id;
            })
        } else {
            return self.contacts;
        }
    };
};

module.exports = contactsServer;