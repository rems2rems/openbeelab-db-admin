module.exports =

    databases :

        local :

            host : 'dev.openbeelab.org'
            protocol : 'http'
            port : 5984
            auth:
                username: 'user_name'
                password: 'user_pass'
            name : 'db_name'
            apiary_name : 'apiary_name'
            location :
                name : "location_name"
                locationType : "GPS"
                latitude : 43.301854
                longitude : -0.399957
                create_noised_area : true
                noise : 0.0166666667 #degree = 1 minute
            beehouse :
                name : 'ruche_name'
                model :
                    _id : "beehousemodel:dadant"
                    name : "dadant"
                    type : "beehousemodel"
                    model : "dadant"
                    weight :
                        value : 37
                        unit : "Kg"
                    extra_box_weight :
                        value : 5
                        unit : "Kg"
            stand :
                name : "socle_001"
                type : "stand"
                device : "arietta_g25"
                sensors : [
                    active : true
                    name : "global-weight"
                    process : "romanScale"
                    action : 'searchEquilibrium'
                    motor :
                        enable : 'J4.8'
                        ms1 : 'J4.10'
                        ms2 : 'J4.12'
                        ms3 : 'J4.14'
                        pulse : 'J4.28'
                        direction : 'J4.30'
                        sleep : 'J4.26'
                        reset : 'J4.24'

                    photoDiode1 : 'in_voltage0_raw'
                    photoDiode2 : 'in_voltage1_raw'
                ]

        # remote :
            
        #     host : 'dev.openbeelab.org'
        #     #host : 'localhost'
        #     protocol : 'http'
        #     port : 5984
        #     auth:
        #         username: 'admin'
        #         password: 'enter admin password here'
        #     name : 'la_mine'

        # replicationInterval :

        #     value : 10
        #     unit : 'minutes'