import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { MultiSelect } from 'primereact/multiselect';
import { InputText } from 'primereact/inputtext';

// import './index.css';
import './DataTableDemo.css';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import nationConversion from '../../data/nationConversion';
import classConversion from '../../data/classConversion.json';
import WRc from '../../functions/WRcolor';
import WN8c from '../../functions/WN8color';
import { camelCase } from 'lodash';


const tiers = [
    { "tier": 1 }, { "tier": 2 }, { "tier": 3 }, { "tier": 4 }, { "tier": 5 }, { "tier": 6 }, { "tier": 7 }, { "tier": 8 }, { "tier": 9 }, { "tier": 10 }
];
const classes = [
    { "class": "HT" }, { "class": "MT" }, { "class": "LT" }, { "class": "TD" }, { "class": "SPG" }
];
const nations = [
    { "nation": "USA" }, { "nation": "China" }, { "nation": "Czech" }, { "nation": "France" }, { "nation": "Germany" },
    { "nation": "Italy" }, { "nation": "Japan" }, { "nation": "Poland" }, { "nation": "Sweden" }, { "nation": "UK" }, { "nation": "USSR" }
];

export default function Table() {
    const [products, setProducts] = useState('');
    const [selectedTier, setSelectedTier] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedNation, setSelectedNation] = useState('');
    const [globalFilter, setGlobalFitler] = useState('');
    const [dt, setDt] = useState('');

    //Runs once when component mounts
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        //const url = `https://tomatobackend.herokuapp.com/api/tankstats`;
        const url = `http://localhost:5000/api/abcd/stats/tankstats`;
        const res = await fetch(url);
        let data = await res.json();
        data = data.overall;
        for (let i = 0; i < data.length; ++i) {
            const link = `/tank/${data[i].id}/${data[i].name.replace(/\s/g, '-')}`;
            data[i].id = <Link to={link}><img src={require(`../../assets/tankIcons/${data[i].id}.png`)} style={{ maxHeight: '24px', margin: '-0.3rem', paddingLeft: '0.7rem' }} alt={data[i].id} /></Link>;
            data[i].name = <Link to={link}>{data[i].name}</Link>;
            data[i].nation = nationConversion[data[i].nation];
            data[i].class = classConversion[data[i].class];
            data[i].winrate = data[i].winrate + "%";
        }
        setProducts(data);
    }

    const header = (
        <div className="table-header">
            Tanks
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFitler(e.target.value)} placeholder="Global Search" />
            </span>
        </div>
    );

    function nameBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </>
        );
    }

    function onTierChange(e) {
        dt.filter(e.value, 'tier', 'in');
        setSelectedTier(e.value);
    }

    function onClassChange(e) {
        dt.filter(e.value, 'class', 'in');
        setSelectedClass(e.value);
    }

    function onNationChange(e) {
        dt.filter(e.value, 'nation', 'in');
        setSelectedNation(e.value);
    }

    const tierFilter = <MultiSelect value={selectedTier} options={tiers} onChange={(e) => onTierChange(e)} optionLabel="tier" optionValue="tier" placeholder="All" className="p-column-filter" />;
    const classFilter = <MultiSelect value={selectedClass} options={classes} onChange={(e) => onClassChange(e)} optionLabel="class" optionValue="class" placeholder="All" className="p-column-filter" />;
    const nationFilter = <MultiSelect value={selectedNation} options={nations} onChange={(e) => onNationChange(e)} optionLabel="nation" optionValue="nation" placeholder="All" className="p-column-filter" />;

    function WRcolor(rowData) {
        return (
            <div style={{ color: 'white', backgroundColor: WRc(rowData.winrate.substring(0, rowData.winrate.length - 1)), padding: '0.5rem 1rem', margin: '-1rem -1rem -1rem -1rem' }}>
                {rowData.winrate}
            </div>
        );
    }

    function WN8color(rowData) {
        return (
            <div style={{ color: 'white', backgroundColor: WN8c(rowData.wn8), padding: '0.5rem 1rem', margin: '-1rem -1rem -1rem -1rem' }}>
                {rowData.wn8}
            </div>
        );
    }

    let table = <></>;
    if (products) {
        table = <>
            <div className="datatable">
                <div className="card">
                    <DataTable value={products}
                        ref={(el) => setDt(el)}
                        paginator
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={100} rowsPerPageOptions={[50, 100, 250, 1000]}
                        sortField="wn8" sortOrder={-1}
                        header={header} globalFilter={globalFilter} className="p"
                        rowHover={true}
                    >
                        <Column field="id" header="" style={{ width: '8%' }}></Column>
                        <Column field="name" header="Name" style={{ width: '13%' }}></Column>
                        <Column field="tier" header="Tier" sortable filter filterElement={tierFilter} style={{ width: '8%' }}></Column>
                        <Column field="class" header="Class" sortable filter filterElement={classFilter} style={{ width: '8%' }}></Column>
                        <Column field="nation" header="Nation" sortable filter filterElement={nationFilter} style={{ width: '10%' }}></Column>
                        <Column field="battles" header="Battles" sortable></Column>
                        <Column field="wn8" header="WN8" body={WN8color} sortable style={{ width: '8%' }}></Column>
                        <Column field="winrate" header="WR" body={WRcolor} sortable style={{ width: '10%' }}></Column>
                        <Column field="dpg" header="DPG" sortable style={{ width: '8%' }}></Column>
                    </DataTable>
                </div>
            </div>
        </>;
    }
    return table;
}