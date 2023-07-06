const adData = {
  facebook: {
    site: "Facebook",
    adViews: 23400,
    clicks: 210,
    conversions: 5,
  },
  twitter: {
    site: "Twitter",
    adViews: 23400,
    clicks: 192,
    conversions: 9,
  },
  instagram: {
    site: "Instagram",
    adViews: 23400,
    clicks: 200,
    conversions: 2,
  },
};

class AdvertisingChannel {
  constructor(data) {
    Object.assign(this, data);
    this.conversionRate = (100 * (this.conversions / this.clicks)).toFixed(1);
  }
  getAdvertisingChannelHtml() {
    const { site, adViews, clicks, conversions, conversionRate } = this;
    return `
    <div class="site-name"> ${site} </div>
    <div>Views: ${adViews} </div>
    <div>Clicks: ${clicks} </div>
    <div>Conversions: ${conversions} </div>
    <div>Conv. Rate: <span class="highlight"> ${conversionRate} %</span></div>
    `;
  }
}

const renderFacebook = new AdvertisingChannel(adData.facebook);
const renderTwitter = new AdvertisingChannel(adData.twitter);
const renderInstagram = new AdvertisingChannel(adData.instagram);

document.getElementById("fb").innerHTML =
  renderFacebook.getAdvertisingChannelHtml();

document.getElementById("twit").innerHTML =
  renderTwitter.getAdvertisingChannelHtml();

document.getElementById("insta").innerHTML =
  renderInstagram.getAdvertisingChannelHtml();
