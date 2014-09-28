modAds.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'modads-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			html: '<h2>' + _('modads') + '</h2>',
			cls: '',
			style: {margin: '15px 0'}
		}, {
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: true,
			hideMode: 'offsets',
			items: [{
				title: _('modads_items'),
				layout: 'anchor',
				items: [{
					html: _('modads_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'modads-grid-items',
					cls: 'main-wrapper',
				}]
			}]
		}]
	});
	modAds.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(modAds.panel.Home, MODx.Panel);
Ext.reg('modads-panel-home', modAds.panel.Home);
