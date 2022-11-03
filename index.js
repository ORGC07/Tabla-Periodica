
const express = require('express');
const app = express();
const port = 3000;
const { engine } =  require('express-handlebars')
app.set('view engine', 'hbs');
app.engine('hbs', engine({
layoutsDir: __dirname + '/views/layouts',

extname: "hbs"

}));app.use(express.static('public'));app.get('/', (req, res) => {
res.render('main', {layout : 'index'});
});

const tablaP = () => {
    return [
        {
            Element:"H",
            Group:"O-NO_METALES"
        },
        {
            Element:"HE",
            Group:"Gases_Nobles"
        },
        {
            Element:"LI",
            Group:"Alcalinos"
        },
        {
            Element:"BE",
            Group:"Alcalinoterreos"
        },
        {
            Element:"B",
            Group:"Metaloides"
        },
        {
            Element:"C",
            Group:"O-NO_METALES"
        },
        {
            Element:"N",
            Group:"O-NO_METALES"
        },
        {
            Element:"O",
            Group:"O-NO_METALES"
        },

        {
            Element:"F",
            Group:"Halogenos"
        },
        {
            Element:"NE",
            Group:"Gases_Nobles"
        },
        {
            Element:"NA",
            Group:"Alcalinos"
        },
        {
            Element:"MG",
            Group:"Alcalinoterreos"
        },
        {
            Element:"AL",
            Group:"O_METALES"
        },
        {
            Element:"SI",
            Group:"Metaloides"
        },
        {
            Element:"P",
            Group:"O-NO_METALES"
        },
        {
            Element:"S",
            Group:"O-NO_METALES"
        },

        {
            Element:"CL",
            Group:"Halogenos"
        },
        {
            Element:"AR",
            Group:"Gases_Nobles"
        },
        {
            Element:"K",
            Group:"Alcalinos"
        },
        {
            Element:"CA",
            Group:"Alcalinoterreos"
        },
        {
            Element:"SC",
            Group:"Metales/Transicion"
        },
        {
            Element:"TI",
            Group:"Metales/Transicion"
        },
        {
            Element:"V",
            Group:"Metales/Transicion"
        },
        {
            Element:"CR",
            Group:"Metales/Transicion"
        },
        {
            Element:"MN",
            Group:"Metales/Transicion"
        },
        {
            Element:"FE",
            Group:"Metales/Transicion"
        },
        {
            Element:"CO",
            Group:"Metales/Transicion"
        },

        {
            Element:"NI",
            Group:"Metales/Transicion"
        },
        {
            Element:"CU",
            Group:"Metales/Transicion"
        },
        {
            Element:"ZN",
            Group:"Metales/Transicion"
        },
        {
            Element:"GA",
            Group:"O_METALES"
        },
        {
            Element:"GE",
            Group:"Metaloides"
        },

        {
            Element:"AS",
            Group:"Metaloides"
        },
        {
            Element:"SE",
            Group:"O-NO_METALES"
        },
        {
            Element:"BR",
            Group:"Halogenos"
        },
        {
            Element:"KR",
            Group:"Gases_Nobles"
        },

        {
            Element:"RB",
            Group:"Alcalinos"
        },
        {
            Element:"SR",
            Group:"Alcalinoterreos"
        },
        {
            Element:"Y",
            Group:"Metales/Transicion"
        },
        {
            Element:"ZR",
            Group:"Metales/Transicion"
        },
        {
            Element:"NB",
            Group:"Metales/Transicion"
        },
        {
            Element:"MO",
            Group:"Metales/Transicion"
        },
        {
            Element:"TC",
            Group:"Metales/Transicion"
        },
        {
            Element:"RU",
            Group:"Metales/Transicion"
        },

        {
            Element:"RH",
            Group:"Metales/Transicion"
        },
        {
            Element:"PD",
            Group:"Metales/Transicion"
        },
        {
            Element:"AG",
            Group:"Metales/Transicion"
        },
        {
            Element:"CD",
            Group:"Metales/Transicion"
        },
        {
            Element:"IN",
            Group:"O_METALES"
        },

        {
            Element:"SN",
            Group:"O_METALES"
        },
        {
            Element:"SB",
            Group:"Metaloides"
        },
        {
            Element:"TE",
            Group:"Metaloides"
        },
        {
            Element:"I",
            Group:"Halogenos"
        },
        {
            Element:"XE",
            Group:"Gases_Nobles"
        },
        {
            Element:"CS",
            Group:"Alcalinos"
        },
        {
            Element:"BA",
            Group:"Alcalinoterreos"
        },
        {
            Element:"LA-LU",
            Group:"Lantanidos"
        },
        {
            Element:"HF",
            Group:"Metales/Transicion"
        },

        {
            Element:"TA",
            Group:"Metales/Transicion"
        },

        {
            Element:"W",
            Group:"Metales/Transicion"
        },

        {
            Element:"RE",
            Group:"Metales/Transicion"
        },

        {
            Element:"OS",
            Group:"Metales/Transicion"
        },

        {
            Element:"IR",
            Group:"Metales/Transicion"
        },


        {
            Element:"PT",
            Group:"Metales/Transicion"
        },

        {
            Element:"AU",
            Group:"Metales/Transicion"
        },

        {
            Element:"HG",
            Group:"Metales/Transicion"
        },

        {
            Element:"TL",
            Group:"O_METALES"
        },

        {
            Element:"PB",
            Group:"O_METALES"
        },


        {
            Element:"BI",
            Group:"O_METALES"
        },

        {
            Element:"PO",
            Group:"Metaloides"
        },

        {
            Element:"AT",
            Group:"Halogenos"
        },

        {
            Element:"RN",
            Group:"Gases_Nobles"
        },

        {
            Element:"FR",
            Group:"Alcalinos"
        },

        {
            Element:"RA",
            Group:"Alcalinoterreos"
        },

        {
            Element:"AC-LR",
            Group:"Actinidos"
        },


        {
            Element:"RF",
            Group:"Metales/Transicion"
        },

        {
            Element:"DB",
            Group:"Metales/Transicion"
        },

        {
            Element:"SG",
            Group:"Metales/Transicion"
        },

        {
            Element:"BH",
            Group:"Metales/Transicion"
        },

        {
            Element:"HS",
            Group:"Metales/Transicion"
        },

        {
            Element:"MT",
            Group:"Metales/Transicion"
        },

        {
            Element:"DS",
            Group:"Metales/Transicion"
        },

        {
            Element:"RG",
            Group:"Metales/Transicion"
        },


        {
            Element:"CN",
            Group:"Metales/Transicion"
        },

        {
            Element:"NH",
            Group:"O_METALES"
        },

        {
            Element:"FL",
            Group:"O_METALES"
        },

        {
            Element:"MC",
            Group:"O_METALES"
        },
        {
            Element:"LV",
            Group:"O_METALES"
        },

        {
            Element:"TS",
            Group:"Halogenos"
        },
        {
            Element:"OG",
            Group:"Gases_Nobles"
        },
        {
            Element:"LA",
            Group:"Lantanidos"
        },
        {
            Element:"CE",
            Group:"Lantanidos"
        },
        {
            Element:"PR",
            Group:"Lantanidos"
        },
        {
            Element:"ND",
            Group:"Lantanidos"
        },
        {
            Element:"PM",
            Group:"Lantanidos"
        },
        {
            Element:"SM",
            Group:"Lantanidos"
        },
        {
            Element:"EU",
            Group:"Lantanidos"
        },

        {
            Element:"GD",
            Group:"Lantanidos"
        },
        {
            Element:"TB",
            Group:"Lantanidos"
        },
        {
            Element:"DY",
            Group:"Lantanidos"
        },
        {
            Element:"HO",
            Group:"Lantanidos"
        },
        {
            Element:"ER",
            Group:"Lantanidos"
        },
        {
            Element:"TM",
            Group:"Lantanidos"
        },
        {
            Element:"YB",
            Group:"Lantanidos"
        },
        {
            Element:"LU",
            Group:"Lantanidos"
        },{
            Element:"AC",
            Group:"Actinidos"
        },{
            Element:"TH",
            Group:"Actinidos"
        },{
            Element:"PA",
            Group:"Actinidos"
        },{
            Element:"U",
            Group:"Actinidos"
        },{
            Element:"NP",
            Group:"Actinidos"
        },{
            Element:"PU",
            Group:"Actinidos"
        },{
            Element:"AM",
            Group:"Actinidos"
        },{
            Element:"CM",
            Group:"Actinidos"
        },{
            Element:"BK",
            Group:"Actinidos"
        },{
            Element:"CF",
            Group:"Actinidos"
        },{
            Element:"ES",
            Group:"Actinidos"
        },{
            Element:"FM",
            Group:"Actinidos"
        },{
            Element:"MD",
            Group:"Actinidos"
        },{
            Element:"NO",
            Group:"Actinidos"
        },
        {
            Element:"LR",
            Group:"Actinidos"
        }
    ]
}


app.get('/', (req,res) => {
    res.render('main',{layout: 'index', TablaPeriodica:tablaP()});
});

app.listen(port, () => console.log(`App listening to port ${port}`));