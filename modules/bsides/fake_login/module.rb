class Fake_login < BeEF::Core::Command
  # set and return all options for this module
  def self.options
    [{
      'name' => 'logout_notice',
      'description' => 'Login Notice',
      'type' => 'textarea',
      'ui_label' => 'Notice Text',
      'value' => 'Your session has expired. Please log back in.',
      'width' => '400px'
    }]
  end

  def post_execute
    content = {}
    content['User Response'] = 'The user submitted the form'
    save content
  end
end
