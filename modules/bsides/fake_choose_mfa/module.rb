class Fake_choose_mfa < BeEF::Core::Command
  # set and return all options for this module
  def self.options
    [{
      'name' => 'mfa_options',
      'description' => 'MFA Options',
      'type' => 'textarea',
      'ui_label' => 'MFA Options',
      'value' => "Work Cell\r\nPersonal Cell",
      'width' => '400px'
    }]
  end

  def post_execute
    content = {}
    content['User Response'] = 'The user submitted the form'
    save content
  end
end
