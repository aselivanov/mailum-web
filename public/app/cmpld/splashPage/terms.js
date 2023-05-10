define(['react'], function (React) {
	return React.createClass({

		onClick: function () {
			$('.hiddens').toggle();
		},
		render: function () {

			return React.createElement(
				'section',
				{ className: 'services grey-bg', id: 'section1' },
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'div',
						{ className: 'section-header' },
						React.createElement(
							'h2',
							{ className: 'dark-text' },
							'Terms and Conditions for cyberfear'
						),
						React.createElement('div', { className: 'colored-line' })
					),
					React.createElement(
						'div',
						{ className: 'sub-heading' },
						React.createElement(
							'h3',
							null,
							'Introduction'
						)
					),
					React.createElement(
						'div',
						{ className: 'row sMailTextAlignLeft' },
						React.createElement(
							'p',
							null,
							'By using this site, you agree to abide by the following Terms and Conditions for use for SCRYPTmail. These Terms and Conditions cover all present and future features offered by your SCRYPTmail account, individually and collectively referred to as the "Service".'
						),
						React.createElement(
							'p',
							null,
							'This Service is provided exclusively to individuals who are at least 18 years of age or to minors who have obtained parental consent to open and maintain an account. Each user is solely responsible for all of his or her messages sent through the Service. As a condition for using this Service, you agree to not use this Service for any unlawful or prohibited activities. You also agree to be bound by these Terms and Conditions. At its sole discretion, SCRYPTmail may terminate service without cause or notice.'
						),
						React.createElement(
							'p',
							null,
							'By using the Service, you agree to abide by all national and international laws and regulations and to not use SCRYPTmail for illegal purposes. You also agree to not disrupt the SCRYPTmail networks and servers. You further agree to not use SCRYPTmail to send spam or junk mail or mailing list emails which contain persons that have not specifically agreed to be included on that list.'
						)
					),
					React.createElement(
						'div',
						{ className: 'sub-heading' },
						React.createElement(
							'h3',
							null,
							'Account Termination'
						)
					),
					React.createElement(
						'div',
						{ className: 'row sMailTextAlignLeft' },
						React.createElement(
							'p',
							null,
							'SCRYPTmail may terminate your access to the Service and any related service(s) at any time, with or without cause, with or without notice, effective immediately, for any reason whatsoever. SCRYPTmail has no obligation to store or forward the contents of your account.'
						),
						React.createElement(
							'p',
							null,
							'If there is any indication that you are using your account for illegal activity, your account will be terminated immediately and without notice. Activities that are absolutely not tolerated include, but are not limited to, the purchase or sale of substances that are illegal in many jurisdictions, purchase or sale of stolen goods, making threats to person or property, possession or distribution of child pornography, and fraud.'
						),
						React.createElement(
							'p',
							null,
							'SCRYPTmail also has no obligations to store messages for accounts that are over their storage quotas. Due to the encrypted nature of SCRYPTmail, you acknowledge that SCRYPTmail has no ability or obligation to recover your data if you misplace your decryption password.'
						)
					),
					React.createElement(
						'div',
						{ className: 'sub-heading' },
						React.createElement(
							'h3',
							null,
							'Liability'
						)
					),
					React.createElement(
						'div',
						{ className: 'row sMailTextAlignLeft' },
						React.createElement(
							'p',
							null,
							'SCRYPTmail is still in beta so the Service may include errors. SCRYPTmail may make improvements and changes to the Service at any time without notice. SCRYPTmail does not make any guarantees about the reliability of the Service and does not guarantee the security of user data despite best efforts. The Service is provided \u201Cas is\u201D and you agree to not hold SCRYPTmail responsible for any damages that arise as a result of the loss of use, data, or profits connected to the performance of the Service. Furthermore, you will not hold SCRYPTmail liable if confidential material is unintentionally released as the result of a security failure or vulnerability.'
						),
						React.createElement(
							'p',
							null,
							'SCRYPTmail will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:'
						),
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								null,
								'to the extent that the website is provided free-of-charge, for any direct loss;'
							),
							React.createElement(
								'li',
								null,
								'for any indirect, special or consequential loss; or'
							),
							React.createElement(
								'li',
								null,
								'for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.'
							)
						),
						React.createElement(
							'p',
							null,
							'These limitations of liability apply even if SCRYPTmail has been expressly advised of the potential loss.'
						)
					),
					React.createElement(
						'div',
						{ className: 'sub-heading' },
						React.createElement(
							'h3',
							null,
							'Indemnification'
						)
					),
					React.createElement(
						'div',
						{ className: 'row sMailTextAlignLeft' },
						React.createElement(
							'p',
							null,
							'You agree that SCRYPTmail, its parents, subsidiaries, officers, and employees cannot be held responsible for any third party claim, demand, or damage, including reasonable attorneys\u2019 fees, arising out of your use of this Service.'
						)
					),
					React.createElement(
						'div',
						{ className: 'sub-heading' },
						React.createElement(
							'h3',
							null,
							'Exceptions'
						)
					),
					React.createElement(
						'div',
						{ className: 'row sMailTextAlignLeft' },
						React.createElement(
							'p',
							null,
							'Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit; and nothing in this website disclaimer will exclude or limit the liability of ScryptMail in respect of any:'
						),
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								null,
								'death or personal injury caused by the negligence of SCRYPTmail or its agents, employees or shareholders/owners;'
							),
							React.createElement(
								'li',
								null,
								'fraud or fraudulent misrepresentation on the part of SCRYPTmail; or'
							),
							React.createElement(
								'li',
								null,
								'matter which it would be illegal or unlawful for SCRYPTmail to exclude or limit, or to attempt or purport to exclude or limit, its liability.'
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'sub-heading' },
						React.createElement(
							'h3',
							null,
							'Unenforceable provisions'
						)
					),
					React.createElement(
						'div',
						{ className: 'row sMailTextAlignLeft' },
						React.createElement(
							'p',
							null,
							'If any provision of this website disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforceability of the other provisions of this website disclaimer.'
						)
					),
					React.createElement(
						'div',
						{ className: 'sub-heading' },
						React.createElement(
							'h3',
							null,
							'Assignment'
						)
					),
					React.createElement(
						'div',
						{ className: 'row sMailTextAlignLeft' },
						React.createElement(
							'p',
							null,
							'SCRYPTmail may transfer, sub-contract or otherwise deal with SCRYPTmail\'s rights and/or obligations under these terms and conditions without notifying you or obtaining your consent.'
						),
						React.createElement(
							'p',
							null,
							'You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.'
						)
					),
					React.createElement(
						'div',
						{ className: 'sub-heading' },
						React.createElement(
							'h3',
							null,
							'Severability'
						)
					),
					React.createElement(
						'div',
						{ className: 'row sMailTextAlignLeft' },
						React.createElement(
							'p',
							null,
							'If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.  If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.'
						)
					),
					React.createElement(
						'div',
						{ className: 'sub-heading' },
						React.createElement(
							'h3',
							null,
							'Entire agreement'
						)
					),
					React.createElement(
						'div',
						{ className: 'row sMailTextAlignLeft' },
						React.createElement(
							'p',
							null,
							'These terms and conditions, together with SCRYPTmail\'s Privacy Policy constitute the entire agreement between you and SCRYPTmail in relation to your use of this website, and supersede all previous agreements in respect of your use of this website.'
						)
					),
					React.createElement(
						'div',
						{ className: 'sub-heading' },
						React.createElement(
							'h3',
							null,
							'Law and jurisdiction'
						)
					),
					React.createElement(
						'div',
						{ className: 'row sMailTextAlignLeft' },
						React.createElement(
							'p',
							null,
							'These terms and conditions will be governed by and construed in accordance with the laws of state WASHINGTON, USA, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of state WASHINGTON, USA.'
						)
					),
					React.createElement(
						'div',
						{ className: 'sub-heading' },
						React.createElement(
							'h3',
							null,
							'Modifications to Terms of Service'
						)
					),
					React.createElement(
						'div',
						{ className: 'row sMailTextAlignLeft' },
						React.createElement(
							'p',
							null,
							'SCRYPTmail reserves the right to review and change this agreement at any time.'
						),
						React.createElement(
							'p',
							null,
							'These terms and conditions govern your use of this website; by using this website, you accept these terms and conditions in full and without reservation. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website.'
						),
						React.createElement('br', null),
						React.createElement(
							'h4',
							null,
							'Updated December 26, 2014'
						)
					)
				)
			);
		}

	});
});